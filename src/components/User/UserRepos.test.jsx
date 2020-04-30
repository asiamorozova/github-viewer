import React from 'react';
import { shallow } from 'enzyme';
import UserRepos from './UserRepos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const repos = [
      {
        id: 233723653,
        name: 'random-twitter',
        html_url: 'https://github.com/asiamorozova/random-twitter'
      },
      {
        id: 236626883,
        name: 'cursed-banana',
        html_url: 'https://github.com/asiamorozova/cursed-banana'
      }
    ];
    const wrapper = shallow(<UserRepos repos={repos}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
