import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function GameTable(props) {
  const ComponentToRender = props.component;
  let content = (<TableRow></TableRow>);

  if (props.items) {
    content = props.items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} item={item} />      
    ));
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <Table>
      {content}
    </Table>
  );
}

GameTable.propTypes = {
  component: PropTypes.func,
  items: PropTypes.array,
};

export default GameTable;

