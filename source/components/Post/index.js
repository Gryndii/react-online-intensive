//Core
import React, {Component} from 'react';

//Components
import {Consumer} from 'components/HOC/withProfile';

//Instruments
import moment from 'moment';
import Styles from './styles.m.css';

class Post extends Component{
    render() {
        return(
            <Consumer>
                {(context) => (
                    <section className={Styles.post}>
                        <img src={context.avatar} alt=""/>
                        <a>
                            {context.currentUserFirstName}
                            {context.currentUserLastName}
                        </a>
                        <time>{moment().format('MMMM D h:mm:ss a')}</time>
                        <p>Howdy!</p>
                    </section>
                )}
            </Consumer>
        );
    }
}

export default Post;
