/**
 * GameTableRow
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export class GameTableRow extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('containers/GameTableRow item', this.props, this.props.item);
    const item = this.props.item;

    const content = (
      <TableRow>
        <TableRowColumn>ROAD: {item.roadteam}</TableRowColumn>
        <TableRowColumn>HOME: {item.hometeam}</TableRowColumn>
        <TableRowColumn>LINE: {item.line}</TableRowColumn>
        <TableRowColumn>SIDE: {item.side}</TableRowColumn>
        <TableRowColumn>TOTAL: {item.total}</TableRowColumn>
        <TableRowColumn>DATE: {item.date}</TableRowColumn>
      </TableRow>
    )

    // Render the content into a list item
    return (
      <div key={`repo-list-item-${item.id}`} item={content} />
    );
    
  }
}

GameTableRow.propTypes = {
  item: PropTypes.object,
};

export default connect(createStructuredSelector({
  // currentUser: makeSelectCurrentUser(),
}))(GameTableRow);
