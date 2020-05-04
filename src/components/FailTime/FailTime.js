import React, { Component } from 'react';


const FailTime = (props) => {
	const {
		hadnleClick = () => {},
	} = props;

	return (
		<div className="fail-time">
			<section className="result">
				<div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
				<h2 className="result__title">Увы и ах!</h2>
				<p className="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
				<button onClick={hadnleClick} className="replay" type="button">Попробовать ещё раз</button>
			</section>
		</div>
	);
};


export default FailTime;