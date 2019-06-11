//Core
import React, {Component} from 'react';

//Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

//Instruments
import Styles from './styles.m.css';

class Feed extends Component{
    render() {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;
        return(
            <section className={Styles.feed}>
                <StatusBar/>
                <Composer
                    avatar={avatar}
                    currentUserFirstName={currentUserFirstName}
                />
                <Post
                    {...this.props}
                />
            </section>
        );
    }
}

export default Feed;
