import React from "react";
import propTypes from "prop-types";

import Welcome from "../components/Welcome/Welcome";
import GameArtist from "../components/GameArtist/GameArtist";
import GameGenre from "../components/GameGenre/GameGenre";

export default class App extends React.Component {
	static defaultProps = {
		numberErrors: 4,
		timerMinutes: 6,
	}

	constructor(props) {
		super(props);
		this.state = {
			counter: -1,
			numberErrors: this.props.numberErrors,
			timerMinutes: this.props.timerMinutes,
		};
	}

	increment = () => {
		const { counter } = this.state;
		const { questions } = this.props;

		const newCounter = counter < questions.length - 1 ? counter + 1 : -1;

		this.setState({ counter: newCounter})

	}

	render() {
		const  { questions	} = this.props;

		const {
			counter,
			numberErrors,
			timerMinutes,
		} = this.state;

		if (counter < 0) {
			return (
				<div>
					<Welcome
						numberErrors={numberErrors}
						timerMinutes={timerMinutes}
						nextQuestion={this.increment}
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
		} = questions[counter];

		if (type === "genre") {
			return (
				<GameGenre
					type={type}
					title={title}
					rightAnswer={rightAnswer}
					possibleErrors={possibleErrors}
					timeline={timeline}
					answers={answers}
					increment={this.increment}
				/>
			);
		}

		return (
			<GameArtist
				type={type}
				title={title}
				rightAnswer={rightAnswer}
				possibleErrors={possibleErrors}
				timeline={timeline}
				answers={answers}
				increment={this.increment}
			/>
		);
	}
}

App.propTypes = {
	numberErrors: propTypes.number,
	timerMinutes: propTypes.number,
};

