//Core
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {withProfile} from "components/HOC/withProfile";

//Instruments
import Styles from './styles.m.css';

const Login = ({isAuthorized, _toggleAuthorization}) => {

    return(
        <>
            {isAuthorized ? <Redirect to='/profile' /> : null}
            <section className={Styles.login}>
                <h1>
                    Oops, it looks like you are not authorized 😔
                </h1>
                <button
                    onClick={_toggleAuthorization}
                >
                    Login
                </button>
            </section>
        </>
    );
};

export default withProfile(Login);
