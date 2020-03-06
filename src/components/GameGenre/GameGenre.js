import React, { Component } from "react";
import propTypes from "prop-types";

import Audio from "../Audio/Audio";

class GameGenre extends Component {
	constructor(props) {
		super(props);
		this.audio = React.createRef();
		this.state = {
			activeTrack: -1,
			progress: 0,
			isLoading: false,
			isPlayning: false,
		};

		this._audio = new Audio("sounds/boom-box-janitors.mp3");

		this._audio.oncanplaythrough = () => this.setState({
			isLoading: true,
		});

		this._audio.onplay = () => this.setState({
			isPlayning: true,
		});

		this._audio.onpause = () => this.setState({
			isPlayning: false,
		});

		this._audio.ontimeupdate = () => this.setState({
			progress: this._audio.currentTime
		});
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

		const [first, second] = answers;
		return (
			<div>
					<Audio
						src={first.src}
						isPlayning={0 === activeTrack}
						startTrack={() => this.startTrack(0)}
					/>
					<Audio
						src={second.src}
						isPlayning={1 === activeTrack}
						startTrack={() => this.startTrack(1)}
					/>
			</div>
		)

		return (
			<div>
				<div className="track">
					<button className="track__button track__button--play" type="button"></button>
					<div className="track__status">
						<audio></audio>
					</div>
					<div className="game__answer">
						<input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1"
													id="answer-1" />
						<label className="game__check" htmlFor="answer-1">Отметить</label>
					</div>
				</div>

				<div className="track">
					<button className="track__button track__button--play" type="button"></button>
					<div className="track__status">
						<audio></audio>
					</div>
					<div className="game__answer">
						<input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1"
													id="answer-2" />
						<label className="game__check" htmlFor="answer-2">Отметить</label>
					</div>
				</div>

				<div className="track">
					<button className="track__button track__button--pause" type="button"></button>
					<div className="track__status">
						<audio></audio>
					</div>
					<div className="game__answer">
						<input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1"
													id="answer-3" />
						<label className="game__check" htmlFor="answer-3">Отметить</label>
					</div>
				</div>

				<div className="track">
					<button className="track__button track__button--play" type="button"></button>
					<div className="track__status">
						<audio></audio>
					</div>
					<div className="game__answer">
						<input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1"
													id="answer-4" />
						<label className="game__check" htmlFor="answer-4">Отметить</label>
					</div>
				</div>
			</div>
		)

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