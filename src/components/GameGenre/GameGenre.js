import React, { Component } from "react";
import propTypes from "prop-types";
import debounce  from 'lodash/debounce';

import { connect } from 'react-redux';

import { gengeUserAnswer } from "../../redux/modules/gameRules/actions/gengeUserAnswer";
import { stepNext } from "../../redux/modules/gameRules/actions/stepNext";
import FormGenge from "./FormGenge";
import Header from "./../Header/Header";

const mapStateToProps = (state) => {
	return state;
}

@connect(mapStateToProps)
export default class GameGenre extends Component {
	static propTypes = {
		type: propTypes.string,
		title: propTypes.string,
		rightAnswer: propTypes.string,
		answers: propTypes.arrayOf(
			propTypes.shape({
				src: propTypes.string,
				genge: propTypes.string,
			})
		)
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTrack: -1,
		};
		this.debounceNextStep = debounce(() => {
			this.props.dispatch(stepNext())
		}, 500);
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
			dispatch
		} = this.props;

		const currentAnswer = Object.keys(values).filter(el => values[el]);

		if (currentAnswer.length === 0) {
			return null
		}

		const userAnaswer = currentAnswer.map(str => {
			return parseInt(str.replace(/[^0-9]/gim,''), 10)
		});

		dispatch(gengeUserAnswer({
			userAnaswer,
			answers,
			rightAnswer,
		}));

		this.debounceNextStep();
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
		console.log(this.props);
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
};