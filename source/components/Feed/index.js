//Core
import React, {Component} from 'react';

//Components
import {withProfile} from "components/HOC/withProfile";
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';
import Catcher from 'components/Catcher';
import Postman from 'components/Postman';

//Instruments
import Styles from './styles.m.css';
import {api, TOKEN, GROUP_ID} from 'config/api';
import {socket} from 'socket/init';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group';
import {fromTo} from 'gsap';

@withProfile
export default class Feed extends Component{
    state = {
        posts: [
        ],
        isFetching: false,
    };

    componentDidMount() {
        const {currentUserFirstName, currentUserLastName} = this.props;

        this._fetchPosts();

        socket.emit('join', GROUP_ID);

        socket.on('create', (postJSON) => {
            const {data: newPost, meta} = JSON.parse(postJSON);

            if(`${currentUserFirstName} ${currentUserLastName}` !==
                `${meta.authorFirstName} ${meta.authorLastName}`
            ) {
                this.setState(({posts}) => {
                    return {
                        posts: [newPost, ...posts]
                    }
                })
            }
        });

        socket.on('remove', (postJSON) => {
            const {data: removedPost, meta} = JSON.parse(postJSON);

            if(`${currentUserFirstName} ${currentUserLastName}` !==
                `${meta.authorFirstName} ${meta.authorLastName}`
            ) {
                this.setState(({posts}) => {
                    return {
                        posts: posts.filter(post => post.id !== removedPost.id)
                    }
                });
            }
        });

        socket.on('like', (likeJSON) => {
            const {data: likedPost, meta} = JSON.parse(likeJSON);

            if(`${currentUserFirstName} ${currentUserLastName}` !==
                `${meta.authorFirstName} ${meta.authorLastName}`
            ) {
                this.setState(({posts}) => {
                    return {
                        posts: posts.map((post) => {
                            post.id === likedPost.id ? likedPost : post;
                        }),
                    }
                });
            }
        });
    }

    componentWillUnmount() {
        socket.removeListener('create');
        socket.removeListener('remove');
        socket.removeListener('like');
    }

    _setPostsFetchingState = (state) => {
        this.setState({
            isFetching: state,
        });
    };

    _fetchPosts = async () => {
        this._setPostsFetchingState(true);

        const response = await fetch(api, {
            method: 'GET',
        });

        const {data: posts} = await response.json();

        this.setState({
            posts: posts,
            isFetching: false,
        });
    };

    _createPost = async (comment) => {
        this._setPostsFetchingState(true);

        const response = await fetch(api,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: TOKEN,
                },
                body: JSON.stringify({comment}),
            }
        );

        const {data: post} = await response.json();

        this.setState(({posts})=>({
            posts: [post, ...posts],
            isFetching: false
        }));
    };

    _removePost = async (id) => {
        this._setPostsFetchingState(true);

        const response = await fetch(`${api}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: TOKEN,
                },
            }
        );

        this.setState(({posts}) => {
            return {
                posts: posts.filter(post => post.id !== id),
                isFetching: false,
            }
        });
    };

    _likePost = async (id) => {
        this._setPostsFetchingState(true);

        const response = await fetch(`${api}/${id}`,
            {
                method: 'PUT',
                headers: {
                    Authorization: TOKEN,
                },
            }
        );

        const {data: likedPost} = await response.json();

        this.setState(({posts}) => {
            return {
                posts: posts.map(
                    (post) => post.id === likedPost.id ? likedPost : post
                ),
                isFetching: false,
            }
        })
    };

    _animateComposerEnter = (composer) => {
        fromTo(composer, 1, {opacity: 0}, {opacity: 1})
    };

    _animatePostmanEntering = (postman) => {
        fromTo(postman, 1, {opacity: 0, x: 200}, {opacity: 1, x: 0});
    };

    _animatePostmanEntered = (postman) => {
        fromTo(postman, 1, {opacity: 1, x: 0}, {opacity: 0, x: 200});
    };

    render() {
        const { posts, isFetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <CSSTransition
                    key={post.id}
                    classNames={{
                        enter: Styles.postInStart,
                        enterActive: Styles.postInEnd,
                    }}
                    timeout={{
                        enter: 500,
                        exit: 400,
                    }}
                >
                    <Catcher>
                        <Post {...post}
                              _likePost={this._likePost}
                              _removePost ={this._removePost}
                        />
                    </Catcher>
                </CSSTransition>
            );
        });

        return(
            <section className={Styles.feed}>
                <Spinner isSpinning={isFetching} />
                <StatusBar/>
                <Transition
                    appear
                    in
                    timeout={1000}
                    onEnter={this._animateComposerEnter}
                >
                    <Composer _createPost = {this._createPost} />
                </Transition>
                <Transition
                    appear
                    in
                    timeout={4000}
                    onEntering={this._animatePostmanEntering}
                    onEntered={this._animatePostmanEntered}
                >
                    <Postman/>
                </Transition>
                <TransitionGroup>
                    {postsJSX}
                </TransitionGroup>
            </section>
        );
    }
}

