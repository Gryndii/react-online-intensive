//Core
import React from 'react';

//Components
import {withProfile} from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';
import {Transition} from 'react-transition-group';
import {fromTo} from 'gsap';

const _animatePostmanEntering = (postman) => {
    fromTo(postman, 1, {opacity: 0, x: 200}, {opacity: 1, x: 0});
};

const _animatePostmanEntered = (postman) => {
    setTimeout(
        () => fromTo(postman, 1, {opacity: 1, x: 0}, {opacity: 0, x: 200}),
        4000
    );
};

const Postman = (props) => {
    return(
        <Transition
            appear
            in
            timeout={1000}
            onEntering={_animatePostmanEntering}
            onEntered={_animatePostmanEntered}
        >
            <section className={Styles.postman}>
                <img src={props.avatar} alt=""/>
                <span>Welcome online, {props.currentUserFirstName}</span>
            </section>
        </Transition>
    );
};

export default withProfile(Postman);
