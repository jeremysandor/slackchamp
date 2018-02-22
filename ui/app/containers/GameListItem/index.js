/**
 * GameListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

// import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import DeleteGame from 'containers/DeleteGame';

import GameData from './GameData';
import Wrapper from './Wrapper';

export class GameListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('containers/GameListItem item', this.props, this.props.item);
    const item = this.props.item;

    const content = (
      <Wrapper>
        <GameData>{item.hometeam}</GameData>
        <GameData>{item.roadteam}</GameData>
        <GameData>{item.line}</GameData>
        <GameData>{item.total}</GameData>
        <GameData>{item.side}</GameData>
        <GameData>{item.date}</GameData>
        <DeleteGame gameId={item.id}/> 
      </Wrapper>
    )

    console.log('content', content);

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.id}`} item={content} />
    );
    
  }
}

GameListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(createStructuredSelector({
  // currentUser: makeSelectCurrentUser(),
}))(GameListItem);
