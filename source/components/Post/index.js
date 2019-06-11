//Core
import React, {Component} from 'react';

//Instruments
import moment from 'moment';
import Styles from './styles.m.css';

class Post extends Component{
    render() {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;
        return(
            <section className={Styles.post}>
                <img src={avatar} alt=""/>
                <a>
                    {currentUserFirstName}
                    {currentUserLastName}
                </a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}

export default Post;
