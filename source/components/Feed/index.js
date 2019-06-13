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
import {getUniqueID} from 'instruments';

class Feed extends Component{
    state = {
        posts: [
            {id: 123, comment: 'Hi there!', created: 1560319902},
            {id: 124, comment: 'Yo', created: 1560319900}
        ],
        isSpinning: false,
    };

    _createPost = (comment) => {
        const post = {
            id: getUniqueID,
            comment,
            created: moment.unix(),
        };

        this.setState(({posts})=>({
            posts: [post, ...posts],
        }))
    };

    render() {
        const { posts, isSpinning } = this.state;

        const postsJSX = posts.map((post) => {
            return <Post key={post.id} {...post}/>
        });

        return(
            <section className={Styles.feed}>
                <Spinner isSpinning={isSpinning} />
                <StatusBar/>
                <Composer _createPost = {this._createPost} />
                {postsJSX}
            </section>
        );
    }
}

export default Feed;
