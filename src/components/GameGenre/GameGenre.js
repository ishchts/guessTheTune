import React, { Component } from "react";
import propTypes from "prop-types";


import FormGenge from "./FormGenge";
import Header from "./../Header/Header";

class GameGenre extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTrack: -1,
		};
	}

	validate = (values) => {
		const errors = {};
		const emptyObjectLength = 0;

		const mapCurrentCheckbox = Object.keys(values).filter(el => values[el]);

		if (mapCurrentCheckbox.length === emptyObjectLength) {
			errors.notSelect = true
		} else {
			errors.notSelect = false
		}

		return errors;
	}

	hadnleSubmit = values => {
		const {
			answers,
			rightAnswer,
			gengeUserAnswer,

		} = this.props;

		const currentAnswer = Object.keys(values).filter(el => values[el]);

		if (currentAnswer.length === 0) {
			return null
		}


		const replaceNumber = currentAnswer.map(str => {
			return parseInt(str.replace(/[^0-9]/gim,''), 10)
		});

		gengeUserAnswer({
			replaceNumber,
			answers,
			rightAnswer,
		});
	}

	startTrack = (index) => {
		const {
			activeTrack
		} = this.state;

		const trackStatus = activeTrack === index ? -1 : index;
		this.setState({ activeTrack: trackStatus });
	};

	render () {
		const {
			title,
			answers,
		} = this.props;
		const {
			activeTrack
		} = this.state;

		return (
			<section id="game-genre" className="game game--genre">
				<Header />
				<section className="game__screen">
					<h2 className="game__title">{title}</h2>
					<FormGenge
						onSubmit={this.hadnleSubmit}
						validate={this.validate}
						answers={answers}
						activeTrack={activeTrack}
						startTrack={this.startTrack}
					/>
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