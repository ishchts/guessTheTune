import React from "react";
import propTypes from "prop-types";
import { connect } from 'react-redux';

import { stepNext } from "../redux/modules/gameRules/actions/stepNext";
import { mistakesCheckFinish } from "../redux/modules/gameRules/actions/gengeUserAnswer";
import { gameReset } from "../redux/modules/gameRules/actions/gameReset";
import { getQuestions } from '../redux/modules/questions/actions/getQuestions';

import Welcome from "../components/Welcome";
import GameArtist from "../components/GameArtist";
import GameGenre from "../components/GameGenre";
import FailTries from "../components/FailTries";
import FailTime from "../components/FailTime";

const mapStateToProps = (state) => {
	const {
		gameRules : {
			currentQuestion,
			mistakes,
			userOfErrors,
			timeInMinutes,
			isFailTime,
		},
	} = state;

	return {
		currentQuestion,
		mistakes,
		timeInMinutes,
		userOfErrors,
		isFailTime,
		questions: state.questions
	};
};

@connect(mapStateToProps)
export default class App extends React.Component {
	static propTypes = {
		numberErrors: propTypes.number,
		timerMinutes: propTypes.number,
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {
			dispatch
		} = this.props;
		return dispatch(getQuestions());
	}

	questionIncrement = () => {
		const {
			dispatch,
		} = this.props;

		return dispatch(stepNext())
	}

	gengeUserAnswer = (values) => {
		const {
			dispatch,
		} = this.props;

		return dispatch(gengeUserAnswer(values))
	}

	mistakesCheckFinish = () => {
		const {
			dispatch,
		} = this.props;

		return dispatch(mistakesCheckFinish())
	}

	render() {
		const {
			currentQuestion,
			mistakes,
			timeInMinutes,
			userOfErrors,
			isFailTime,
			questions: {
				loading: loadingQuestion,
				success,
				error,
				data: listQuestion
			}
		} = this.props;
		
		if (loadingQuestion) {
			return (
				<div>Загрузка...</div>
			)
		}

		if (currentQuestion < 0) {
			return (
				<Welcome
					mistakes={mistakes}
					timeInMinutes={timeInMinutes}
					startPlay={this.questionIncrement}
				/>
			);
		}

		if (userOfErrors > mistakes) {
			return (
				<FailTries handleRepeatClick={() => this.props.dispatch(gameReset())} />
			)
		}

		if (isFailTime) {
			return (
				<FailTime
					hadnleClick={() => this.props.dispatch(gameReset())}
				/>
			)
		}

		const { type } = listQuestion[currentQuestion];

		if (type === "genre") {
			return (
				<GameGenre />
			);
		}

		if (type === 'artist') {
			return ( <GameArtist />
			);
		}

		return null;
		
	}
};
