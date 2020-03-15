import React from "react";
import propTypes from "prop-types";
import { connect } from 'react-redux';


import { nextQuestion } from "../redux/modules/gameRules/actions/nextQuestion";
import { resetQuestion } from "../redux/modules/gameRules/actions/resetQuestion";
import { gengeUserAnswer } from "../redux/modules/gameRules/actions/gengeUserAnswer";
import { mistakesCheckFinish } from "../redux/modules/gameRules/actions/gengeUserAnswer";

import Welcome from "../components/Welcome/Welcome";
import GameArtist from "../components/GameArtist/GameArtist";
import GameGenre from "../components/GameGenre/GameGenre";

const mapStateTopProps = (state) => {
	const {
		gameRules : {
			currentQuestion,
			mistakes,
			timeInMinutes,
		},
		questions,
	} = state;

	return {
		currentQuestion,
		mistakes,
		timeInMinutes,
		questions: questions,
	};
};

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	questionIncrement = () => {
		const {
			dispatch,
			currentQuestion,
			questions
		} = this.props;

		if (currentQuestion === questions.length - 1) {
			return dispatch(resetQuestion())
		}

		return dispatch(nextQuestion())
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
			questions
		} = this.props;


		if (!questions[currentQuestion]) {
			return (
				<div>
					<Welcome
						mistakes={mistakes}
						timeInMinutes={timeInMinutes}
						startPlay={this.questionIncrement}
					/>
				</div>
			);
		}

		const {
			type,
			title,
			rightAnswer,
			possibleErrors,
			timeline,
			answers,
		} = questions[currentQuestion] ;

		if (type === "genre") {
			return (
				<GameGenre
					type={type}
					title={title}
					rightAnswer={rightAnswer}
					possibleErrors={possibleErrors}
					timeline={timeline}
					answers={answers}
					increment={this.questionIncrement}
					gengeUserAnswer={this.gengeUserAnswer}
					currentQuestion={currentQuestion}
					mistakesCheckFinish={this.mistakesCheckFinish}
				/>
			);
		}

		if (type === 'artist') {
			return (
				<GameArtist
					type={type}
					title={title}
					rightAnswer={rightAnswer}
					possibleErrors={possibleErrors}
					timeline={timeline}
					answers={answers}
					increment={this.questionIncrement}
				/>
			);
		}

		return <div>213</div>


	}
}

App.propTypes = {
	numberErrors: propTypes.number,
	timerMinutes: propTypes.number,
};

export default connect(mapStateTopProps)(App);

