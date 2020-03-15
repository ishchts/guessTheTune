import React from 'react';
import propTypes from 'prop-types';

const Mistakes = ({numberOfErrors}) => {
  let wrongItem = [];

  for (let i = 0; i < numberOfErrors; i++) {
    wrongItem = [...wrongItem, <div className="wrong"></div>,];
  }

  return (
    <div className="game__mistakes">
      {wrongItem}
    </div>
  )
};


export default Mistakes