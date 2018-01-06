import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
// import RepoListItem from 'containers/RepoListItem';
import GameListItem from 'containers/GameListItem';

function GamesList({ loading, error, games }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (games !== false) {
    console.log('components/GamesList', games);
    return <List items={games} component={GameListItem} />;
  }

  return null;
}

GamesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  games: PropTypes.any,
};

export default GamesList;
