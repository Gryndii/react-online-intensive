//Core
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {withProfile} from "components/HOC/withProfile";

//Instruments
import Styles from './styles.m.css';

@withProfile
export default class Profile extends Component{

    render() {
        const {currentUserFirstName, currentUserLastName, avatar, isAuthorized} = this.props;

        return(
            <>
                {isAuthorized ? null : <Redirect to='/login' />}
                <section className={Styles.profile}>
                    <h1>
                        Welcome, {currentUserFirstName} {currentUserLastName}
                    </h1>
                    <img src={avatar} alt=""/>
                </section>
            </>
        );
    }
}

