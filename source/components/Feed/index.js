//Core
import React, {Component} from 'react';
import moment from 'moment';

//Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';
import {getUniqueID, delay} from 'instruments';

class Feed extends Component{
    state = {
        posts: [
            {
                id: 123, comment: 'Hi there!',
                created: 1560319902,
                likes: []
            },
            {
                id: 124, comment: 'Yo',
                created: 1560319900,
                likes: []
            }
        ],
        isFetching: false,
    };

    _setPostsFetchingState = (state) => {
        this.setState({
            isFetching: state,
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

        await delay(1200);

        this.setState(({posts})=>({
            posts: [post, ...posts],
            isFetching: false
        }));
    };

    _deletePost = (id) => {
        const {posts} = this.state;
        const newPosts = posts.filter((post) => {
            return post.id !== id;
        });
        this.setState({posts: newPosts});
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

    render() {
        const { posts, isFetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Post key={post.id}
                      {...post}
                      _likePost={this._likePost}
                      _deletePost ={this._deletePost}
                />
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

export default Feed;
