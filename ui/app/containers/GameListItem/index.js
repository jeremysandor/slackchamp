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
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export class GameListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('containers/GameListItem item', this.props, this.props.item);
    const item = this.props.item;

    const content = (
      <Wrapper>
        <div>ROAD: {item.roadteam}</div>
        <div>HOME: {item.hometeam}</div>
        <div>LINE: {item.line}</div>
        <div>SIDE: {item.side}</div>
        <div>TOTAL: {item.total}</div>
        <div>DATE: {item.date}</div>
      </Wrapper>
    )

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
