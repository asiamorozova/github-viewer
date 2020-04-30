import React from 'react';
import { shallow } from 'enzyme';
import UserRepo from './UserRepo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const wrapper = shallow(<UserRepo 
      name="asiamorozova"
      html_url="https://github.com/asiamorozova"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
