import React from 'react';
import Counter from './';
import renderer from 'react-test-renderer';

const renderTree = renderer.create(<Counter count={3}/>).toJSON();

test('Counter JSX should correspond to its snapshot', () => {
    expect(renderTree).toMatchSnapshot();
});
