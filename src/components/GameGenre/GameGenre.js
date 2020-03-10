import React, { Component } from "react";
import propTypes from "prop-types";

import Audio from "../Audio/Audio";

class GameGenre extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTrack: -1,
		};
	}


	startTrack = (index) => {
		const {
			activeTrack
		} = this.state;
		const trackStatus = activeTrack === index ? -1 : index;
		this.setState({ activeTrack: trackStatus });
	};

	renderTracks = () => {
		const {
			answers,
		} = this.props;

		const {
			activeTrack
		} = this.state;

		return answers.map((el, index) => (
			<div className="track" key={index}>
						<Audio
							src={el.src}
							isPlayning={index === activeTrack}
							startTrack={() => this.startTrack(index)}
						/>
				<div className="game__answer">
					<input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`}
												id={`answer-${index}`} />
					<label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
				</div>
			</div>
		));
	}

	render () {
		const {
			title,
			increment,
		} = this.props;

		return (
			<section id="game-genre" className="game game--genre">
				<header className="game__header">
					<a className="game__back" href="#">
						<span className="visually-hidden">Сыграть ещё раз</span>
						<img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
					</a>

					<svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
						<circle className="timer__line" cx="390" cy="390" r="370"
														style={{
															filter: "url(#blur)",
															transform: "rotate(-90deg) scaleY(-1)",
															transformOrigin: "center",
														}}/>
					</svg>

					<div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
						<span className="timer__mins">05</span>
						<span className="timer__dots">:</span>
						<span className="timer__secs">00</span>
					</div>

					<div className="game__mistakes">
						<div className="wrong"></div>
						<div className="wrong"></div>
						<div className="wrong"></div>
					</div>
				</header>

				<section className="game__screen">
					<h2 className="game__title">{title}</h2>
					<form onSubmit={e => {

					}} className="game__tracks">
						{this.renderTracks()}
						<button onClick={increment} className="game__submit button" type="submit">Ответить</button>
					</form>
				</section>
			</section>
		);
	};
	}


GameGenre.propTypes = {
	type: propTypes.string,
	title: propTypes.string,
	rightAnswer: propTypes.string,
	answers: propTypes.arrayOf(
		propTypes.shape({
			src: propTypes.string,
			genge: propTypes.string,
		})
	)
};

export default GameGenre;