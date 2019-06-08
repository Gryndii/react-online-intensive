import React, {Component} from 'react';
import avatar from 'theme/assets/lisa';
import moment from 'moment';

class Post extends Component{
    render() {
        return(
            <section>
                <img src={avatar} alt=""/>
                <a>Lisa Simpson</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}

export default Post;
