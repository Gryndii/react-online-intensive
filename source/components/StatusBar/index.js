//Core
import React, {Component} from 'react';

//Components
import {Consumer} from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

class StatusBar extends Component{
    render() {
        return(
            <Consumer>
                {
                    (context) => (
                        <section className={Styles.statusBar}>
                            <button>
                                <img src={context.avatar} alt=""/>
                                <span>{context.currentUserFirstName}</span>
                                &nbsp;
                                <span>{context.currentUserLastName}</span>
                            </button>
                        </section>
                    )
                }
            </Consumer>
        );
    }
}

export default StatusBar;