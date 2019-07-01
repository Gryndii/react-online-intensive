//Core
import React from 'react';
import {hot} from 'react-hot-loader';

//Components
import {Button, Container, Heading, Message} from '../styled';

const Farm = (props) => {
    return(
        <Container>
            <Heading>Ферма</Heading>
            <div>
                <Message>Ласкаво Просимо</Message>
            </div>
            <Button>Зібрати Врожай!</Button>
        </Container>
    );
};

export default Farm;
