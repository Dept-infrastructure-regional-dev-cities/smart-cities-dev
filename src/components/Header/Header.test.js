import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const defaultProps = {
  cityId: 'perth',
  categoryId: 'jobs',
};

it('should match Snapshot', () => {
  const component = shallow(
    <Header {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
