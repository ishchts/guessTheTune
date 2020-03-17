import React, { Component } from 'react';

export default class FailTries extends Component {
  render() {
    return (
      <section id="fail-tries" className="result">
        <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
        </div>
        <h2 className="result__title">Какая жалость!</h2>
        <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий
          раз!</p>
        <button className="replay" type="button">Попробовать ещё раз</button>
      </section>
    );
  }
}
