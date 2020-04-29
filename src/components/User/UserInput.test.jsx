import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput';

describe('UserInput component', () => {
  it('renders UserInput', () => {
    const wrapper = shallow(<UserInput 
      username="asiamorozova"
      onUserChange={() => {}}
      onUserSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
