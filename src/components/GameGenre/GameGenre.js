import React, { Component } from "react";
import propTypes from "prop-types";
import debounce  from 'lodash/debounce';

import { connect } from 'react-redux';

import { gengeUserAnswer } from "../../redux/modules/gameRules/actions/gengeUserAnswer";
import { stepNext } from "../../redux/modules/gameRules/actions/stepNext";
import FormGenge from "./FormGenge";
import Header from "./../Header/Header";

const genreTitle = {
	electronic: 'Выберите все треки electronic',
	alternative: 'Выберите все треки alternative',
	reggae: 'Выберите все треки reggae',
	country: 'Выберите все треки country',
};

const mapStateToProps = (state) => {
	const {
		gameRules: {
			currentQuestion: index
		},
		questions: {
			data
		}
	} = state;


	const {
		genre,
		answers,
	} = data[index];

	const title = genreTitle[genre];

	return {
		answers,
		title,
		genre,
	};
}

@connect(mapStateToProps)
export default class GameGenre extends Component {
	static propTypes = {
		title: propTypes.string,
		genre: propTypes.string.isRequired,
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

	hadnleSubmit = (values, state, props) => {
		props.reset();
		const {
			answers,
			genre,
			dispatch
		} = this.props;

		dispatch(gengeUserAnswer({
			userAnswer: values,
			answers,
			rightGenre: genre,
		}));
		this.debounceNextStep();
		return;
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
						answers={answers}
						activeTrack={activeTrack}
						startTrack={this.startTrack}
					/>
				</section>
			</section>
		);
	};
};