//Core
import React, {Component} from 'react';

//Instruments
import {object} from 'prop-types';
import Styles from './styles.m.css';

export default class Catcher extends Component {
    static propTypes = {
        children: object.isRequired,
    };

    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        console.log('ERROR: ', error);
        console.log('STACKTRACE', errorInfo.componentStack);

        this.setState({
            error: true,
        });
    }

    render() {
        if(this.state.error) {
            return (
                <div className={Styles.catcher}>
                    <span>
                        A mysterious error occurred.
                    </span>
                    <p>
                        Our space engineers already fixing it!
                    </p>
                </div>
            );
        }

        return (this.props.children);
    }
}

