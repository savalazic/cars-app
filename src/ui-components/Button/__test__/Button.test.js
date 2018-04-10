import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without throwing an error', () => {
    it('should render without throwing an error', () => {
      expect(shallow(<Button />).exists(<button />)).toBe(true);
    });
  });
});
