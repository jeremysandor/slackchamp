import React from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';

// import Item from './Item';
// import Wrapper from './Wrapper';

function ListElem(props) {
  return (
    <ListItem>
      {props.item}
    </ListItem>
  );
}

ListElem.propTypes = {
  item: PropTypes.any,
};

export default ListElem;
