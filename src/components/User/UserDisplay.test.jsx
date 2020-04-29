import React from 'react';
import { shallow } from 'enzyme';
import User from './UserDisplay';

describe('User', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<User login='asiamorozova'
    
      followers_url='1' 
      following_url='1' 
      url='https://github.com/asiamorozova' 
      avatar_url='https://avatars0.githubusercontent.com/u/57855398?v=4' />);
    expect(wrapper).toMatchSnapshot();
  });
});
