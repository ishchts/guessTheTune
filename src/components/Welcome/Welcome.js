import React from "react";
import propTypes from "prop-types";

const Welcome = (props) => {
	const { timerMinutes, numberErrors, nextQuestion } = props;


	return (
		<section className="welcome">
			<div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
			<button onClick={nextQuestion} className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
			<h2 className="welcome__rules-title">Правила игры</h2>
			<p className="welcome__text">Правила просты:</p>
			<ul className="welcome__rules-list">
				<li>За {timerMinutes} минут нужно ответить на все вопросы.</li>
				<li>Можно допустить {numberErrors} ошибки.</li>
			</ul>
			<p className="welcome__text">Удачи!</p>
		</section>
	);
};

Welcome.propTypes = {
	numberErrors: propTypes.number,
	timerMinutes: propTypes.number,
};

export default Welcome;

