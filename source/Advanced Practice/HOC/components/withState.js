//Core
import React, {Component} from 'react';

//Instruments
import {getDisplayName} from "../helpers";

export const withState = (props) => {
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


