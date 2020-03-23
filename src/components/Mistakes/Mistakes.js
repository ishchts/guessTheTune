import React from 'react';
import propTypes from 'prop-types';

const Mistakes = ({userOfErrors}) => {
  let wrongItem = [];

  for (let i = 0; i < userOfErrors; i++) {
    wrongItem = [...wrongItem, <div className="wrong"></div>,];
  }

  return (
    <div className="game__mistakes">
      {wrongItem}
    </div>
  )
};

Mistakes.propTypes = {
  userOfErrors: propTypes.number,
}

export default Mistakes