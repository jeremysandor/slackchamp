/**
*
* DeleteButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import RemoveGame from 'containers/RemoveGame';



function DeleteButton(gameId) {
  // console.log('DeleteButton', gameId);
  // console.log('RemoveGame', RemoveGame());

  return (
    <button onClick={RemoveGame}>[X]</button>
    // <button>[X]</button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteButton;
