import React, { Component } from 'react';
import { connect } from 'react-redux';

import Mistakes from './../Mistakes/Mistakes';
import Timer from './../Timer/Timer';

const mapStateToProps = (state) => {
  const {
    gameRules: {
      userOfErrors
    }
  } = state;

  return {
    userOfErrors
  }
}

class Header extends Component {
  render() {
    const {
      userOfErrors
    } = this.props;

    return (
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>
        <Timer />
        <Mistakes userOfErrors={userOfErrors} />
      </header>
    )
  }
}

export default connect(mapStateToProps)(Header)