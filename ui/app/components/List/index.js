import React from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';

import Ul from './Ul';
import Wrapper from './Wrapper';
import ListHeader from './ListHeader';

function ListElem(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item) => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <Wrapper>
      <ListHeader>Home</ListHeader>
      <ListHeader>Road</ListHeader>
      <ListHeader>Line</ListHeader>
      <ListHeader>Total</ListHeader>
      <ListHeader>Side</ListHeader>
      <ListHeader>Date</ListHeader>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

ListElem.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
};

export default ListElem;
