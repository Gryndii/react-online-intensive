//Core
import React, {Component} from 'react';
import {Form, Field} from "formik";
import cx from 'classnames';

//Instruments
import {Message, Button} from '../../styled';
import Styles from './styles.m.css';

export default class Index extends Component {
    render() {
        const {touched, isSubmitting, errors, values} = this.props;
        const emailStyles = cx(Styles.input, {
            [Styles.inputError]: touched.email && errors.email,
            [Styles.inputSuccess]: touched.email && !errors.email,
        });
        const passwordStyles = cx(Styles.input, {
            [Styles.inputError]: touched.password && errors.password,
            [Styles.inputSuccess]: touched.password && !errors.password,
        });
        const submittingMessage = isSubmitting ? 'Logging in progress...' : 'Sign in';

        return(
            <Form className={Styles.signInForm}>
                <Field
                    placeholder='Email'
                    name='email'
                    type='email'
                    className={emailStyles}
                />
                <Field
                    placeholder='Password'
                    name='password'
                    type='password'
                    className={passwordStyles}
                />
                <label>
                    <Field
                        type='checkbox'
                        name='remember'
                        checked={values.remember}
                    />
                    <span>Remember me</span>
                </label>
                <Button
                    type='submit'
                    disabled={isSubmitting}
                >
                    {submittingMessage}
                </Button>
            </Form>
        );
    }
}
