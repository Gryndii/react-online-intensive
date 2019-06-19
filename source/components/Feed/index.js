//Core
import React, {Component} from 'react';
import moment from 'moment';

//Components
import {withProfile} from "components/HOC/withProfile";
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';
import Catcher from 'components/Catcher';

//Instruments
import Styles from './styles.m.css';
import {getUniqueID, delay} from 'instruments';
import {api} from 'config/api';

@withProfile
export default class Feed extends Component{
    state = {
        posts: [
        ],
        isFetching: false,
    };

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
        const post = {
            id: getUniqueID(),
            comment,
            created: moment().unix(),
            likes: [],
        };

        const response = await fetch(api,
            {
                method: 'POST',
                headers: {

                }
            }
        );

        await delay(1200);

        this.setState(({posts})=>({
            posts: [post, ...posts],
            isFetching: false
        }));
    };

    _removePost = (id) => {
        this.setState(({posts}) => {
            return {
                posts: posts.filter(post => post.id !== id)
            }
        });
    };

    _likePost = async (id) => {
        const {currentUserFirstName, currentUserLastName} = this.props;
        this._setPostsFetchingState(true);

        await delay(1200);

        const newPosts = this.state.posts.map((post) => {
            if(id === post.id) {
                return {
                    ...post,
                    likes: [
                        {
                            id: getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName: currentUserLastName,
                        }
                    ]
                }
            }
            return post;
        });

        this.setState({
            posts: newPosts,
            isFetching: false,
        });
    };

    componentDidMount() {
        this._fetchPosts();
    }

    render() {
        const { posts, isFetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key={post.id}>
                    <Post {...post}
                          _likePost={this._likePost}
                          _removePost ={this._removePost}
                    />
                </Catcher>
            );
        });

        return(
            <section className={Styles.feed}>
                <Spinner isSpinning={isFetching} />
                <StatusBar/>
                <Composer _createPost = {this._createPost} />
                {postsJSX}
            </section>
        );
    }
}

