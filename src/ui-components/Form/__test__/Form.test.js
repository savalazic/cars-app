import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import Form from '../Form';

describe('Form component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render without throwing an error', () => {
    expect(shallow(<Form />).exists(<form />)).toBe(true);
  });

  it('renders a submit button', () => {
    expect(mount(<Form />).find('button').length).toEqual(1);
  });
});
