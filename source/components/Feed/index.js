import React, {Component} from 'react';
import Composer from 'components/Composer';
import Post from 'components/Post';

class Feed extends Component{
    render() {
        return(
            <section>
                <Composer/>
                <Post/>
            </section>
        );
    }
}

export default Feed;
