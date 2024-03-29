//Core
import React from 'react';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Composer} from './';

const props = {
    _createPost: jest.fn(),
    avatar: 'avatarSrcMock',
    currentUserFirstName: 'firstNameMock',
};

const comment = 'Mocks';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const result = mount(<Composer {...props} />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _getCommentSpy = jest.spyOn(result.instance(), '_getComment');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');

describe('Composer component:', () => {
    test('Composer should have one "section" element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('Composer should have one "form" element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('Composer should have one "textarea" element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('Composer should have one "input" element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('Composer should have one "img" element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('Composer should have comment: "" initial state', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('Composers textarea should be empty initially', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('Composer should response to state change correctly', () => {
        result.setState({
            comment,
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });
        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('Should handle textarea change event properly', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            }
        });

        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);
    });

    test('Should handle form submit correctly', () => {
        result.find('form').simulate('submit');

        expect(result.state()).toEqual(initialState);
    });

    test('Expected to call _createPost after form submit', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitComment and _handleFormSubmit class methods should be evoked once after form is submitted', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
    });

    //Hw
    test('Composers img should have correct avatar', () => {
        expect(result.find('img').prop('src')).toBe(props.avatar);
    });

    test('Composers textarea placeholder should be correct', () => {
        expect(result.find('textarea').prop('placeholder')).toBe(`Whats on your mind, ${props.currentUserFirstName}?`);
    });

    test('_getComment should be evoked once after textarea value is changed', () => {
        expect(_getCommentSpy).toHaveBeenCalledTimes(1);
    });

    test('Expected _submitOnEnterSpy should be called after keypress Enter', () => {
        result.find('textarea').simulate('keydown', {
           key: 'Enter',
        });

        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
    });
});


