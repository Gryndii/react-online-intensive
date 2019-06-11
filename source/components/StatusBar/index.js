//Core
import React, {Component} from 'react';

//Instruments
import Styles from './styles.m.css';

class StatusBar extends Component{
    render() {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;
        return(
            <section className={Styles.statusBar}>
                <button>
                    <img src={avatar} alt=""/>
                    <span>{currentUserFirstName}</span>
                    &nbsp;
                    <span>{currentUserLastName}</span>
                </button>
            </section>
        );
    }
}

export default StatusBar;
