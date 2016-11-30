import React from 'react';
import {shallow} from 'enzyme';
import HelloWorld from '../src/shared/HelloWorld';

it('Should display hello world', () => {
  // Render a checkbox with label in the document
  const component = shallow(
    <HelloWorld />
  );

  expect(component.text()).toEqual('hello world!');
});
