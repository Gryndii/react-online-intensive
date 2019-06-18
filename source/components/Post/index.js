//Core
import React, {Component} from 'react';

//Components
import {withProfile} from "components/HOC/withProfile";
import Like from 'components/Like';

//Instruments
import moment from 'moment';
import Styles from './styles.m.css';
import {func, string, number, array} from 'prop-types';

@withProfile
export default class Post extends Component{
    static propTypes = {
        comment: string.isRequired,
        created: number.isRequired,
        _likePost: func.isRequired,
        id: string.isRequired,
        likes: array.isRequired,
    };

    render() {
        const {
            comment, created, _likePost, id, likes, _removePost,
            currentUserFirstName, currentUserLastName, avatar
        } = this.props;
        return(
            <section className={Styles.post}>
                        <span
                            className={Styles.cross}
                            onClick={()=>{_removePost(id)}}
                        >
                        </span>
                <img src={avatar} alt=""/>
                <a>
                    {currentUserFirstName}
                    {currentUserLastName}
                </a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like _likePost={_likePost} id={id} likes={likes}/>
            </section>
        );
    }
}
