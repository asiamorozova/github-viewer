import React from 'react';
import PropTypes from 'prop-types';
import UserRepo from './UserRepo';

const UserRepos = ({ repos }) => {
  const repoData = repos.map(repo => <UserRepo key={repo.id} {...repo} />);
  return (
    <ul>
      {repoData}
    </ul>
  );
};

UserRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }))
};

export default UserRepos;
