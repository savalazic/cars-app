import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without throwing an error', () => {
    expect(shallow(<Input />).exists(<input />)).toBe(true);
  });
});
