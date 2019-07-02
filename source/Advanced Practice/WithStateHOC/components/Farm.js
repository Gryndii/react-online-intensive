//Core
import React from 'react';
import {hot} from 'react-hot-loader';

//Components
import {Button, Container, Heading, Message} from '../styled';
import {withState} from './withState';

const Farm = (props) => {
    const applesJSX = Array(props.apples).fill('🍏');
    return(
        <Container>
            <Heading>Ферма</Heading>
            <div>
                <Message>Ласкаво Просимо</Message>
                <Message>
                    {applesJSX}
                </Message>
            </div>
            <Button
                onClick={props._yieldApples}
            >
                Зібрати Врожай!
            </Button>
        </Container>
    );
};

export default withState({
    stateName: 'apples',
    stateValue: 3,
    stateUpdaterName: '_yieldApples',
    stateUpdater: ({apples}) => ({
        apples: apples + 1,
    }),
})(Farm);
