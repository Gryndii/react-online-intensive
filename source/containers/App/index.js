// Core
import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import {Switch, Route, Redirect} from 'react-router-dom';


//Components
import Feed from 'components/Feed/';
import Profile from 'components/Profile/';
import Login from 'components/Login';
import {Provider} from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';

//Instruments
import avatar from 'theme/assets/avatar';

const options = {
    avatar: avatar,
    currentUserFirstName: 'Роман',
    currentUserLastName: 'Гриндий',
};

@hot(module)
export default class App extends Component {
    state = {
        isAuthorized: localStorage.getItem('facebookIsAuthorized') !== null
            ? JSON.parse(localStorage.getItem('facebookIsAuthorized'))
            : false,
    };

    _toggleAuthorization = () => {
        this.setState(({isAuthorized}) => ({
            isAuthorized: !isAuthorized,
        }), () => {
            localStorage.setItem('facebookIsAuthorized', this.state.isAuthorized);
        });
    };

    render() {
        return (
            <Provider value={{...options, ...this.state, _toggleAuthorization: this._toggleAuthorization}}>
                <StatusBar/>
                <Switch>
                    <Route component={Feed} path='/feed' />
                    <Route component={Profile} path='/profile' />
                    <Route component={Login} path='/login' />
                    <Redirect to='/feed' />
                </Switch>
            </Provider>
        );
    }
}
