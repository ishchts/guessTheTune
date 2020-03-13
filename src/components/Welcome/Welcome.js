import React, { Component } from "react";
import propTypes from "prop-types";

class Welcome extends Component {
	static defaultProps = {
		mistakes: 3,
		timeInMinutes: 5,
		startPlay: () => {},
	}

	render () {
		const {
			mistakes,
			timeInMinutes,
			startPlay,
		} = this.props;

		console.log(this.props);

		return (
			<section className="welcome">
				<div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
				<button onClick={startPlay} className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
				<h2 className="welcome__rules-title">Правила игры</h2>
				<p className="welcome__text">Правила просты:</p>
				<ul className="welcome__rules-list">
					<li>За {timeInMinutes} минут нужно ответить на все вопросы.</li>
					<li>Можно допустить {mistakes} ошибки.</li>
				</ul>
				<p className="welcome__text">Удачи!</p>
			</section>
		);
	}

};

Welcome.propTypes = {
	mistakes: propTypes.number,
	timeInMinutes: propTypes.number,
	startPlay: propTypes.func,
};

export default Welcome;

