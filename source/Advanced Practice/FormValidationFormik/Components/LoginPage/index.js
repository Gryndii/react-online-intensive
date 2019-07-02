//Core
import React, {Component} from 'react';
import {Formik} from 'formik';
import {hot} from 'react-hot-loader';

//Components
import LoginForm from '../LoginForm';

//Instruments
import {Container, Message} from "../../styled";
import {schema, delay} from "../../helpers";

@hot(module)
export class LoginPage extends Component {
    state = {
      isAuthenticated: false
    };

    _login = async (credentials, actions) => {
        await delay(1000);

        this.setState({
            isAuthenticated: true,
        });

        actions.setSubmitting(false);

        await delay(1000);

        this.setState({
            isAuthenticated: false,
        });
    };

    render () {
        const {isAuthenticated} = this.state;

        return(
            <Container>
                {
                    isAuthenticated
                        ? <Message>Welcome!</Message>
                        : <Formik
                            render={props => <LoginForm {...props}/>}
                            initialValues={{
                                email: '',
                                password: '',
                                remember: false,
                            }}
                            validationSchema={schema}
                            onSubmit={this._login}
                        />
                }
            </Container>
        );
    }
}
