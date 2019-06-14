//Core
import React, {Component} from 'react';

//Components
import Like from 'components/Like';
import {Consumer} from 'components/HOC/withProfile';

//Instruments
import moment from 'moment';
import Styles from './styles.m.css';
import {func, string, number, array} from 'prop-types';

class Post extends Component{
    static propTypes = {
        comment: string.isRequired,
        created: number.isRequired,
        _likePost: func.isRequired,
        id: string.isRequired,
        likes: array.isRequired,
    };

    render() {
        const {comment, created, _likePost, id, likes, _removePost} = this.props;
        return(
            <Consumer>
                {(context) => (
                    <section className={Styles.post}>
                        <span
                            className={Styles.cross}
                            onClick={()=>{_removePost(id)}}
                        >
                        </span>
                        <img src={context.avatar} alt=""/>
                        <a>
                            {context.currentUserFirstName}
                            {context.currentUserLastName}
                        </a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                        <Like _likePost={_likePost} id={id} likes={likes} {...context} />
                    </section>
                )}
            </Consumer>
        );
    }
}

export default Post;
