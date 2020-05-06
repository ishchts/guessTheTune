import React from "react";
import propTypes from "prop-types";
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { stepNext } from "../redux/modules/gameRules/actions/stepNext";
import { mistakesCheckFinish } from "../redux/modules/gameRules/actions/gengeUserAnswer";
import { gameReset } from "../redux/modules/gameRules/actions/gameReset";
import { getQuestions } from '../redux/modules/questions/actions/getQuestions';

import Welcome from "../components/Welcome";
import GameArtist from "../components/GameArtist";
import GameGenre from "../components/GameGenre";
import FailTries from "../components/FailTries";
import FailTime from "../components/FailTime";

import { AppRoute } from '../routes';

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

@withRouter
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

	componentDidUpdate() {
		const {
			mistakes,
			userOfErrors,
			isFailTime,
			history,
			location: {
				pathname
			}
		} = this.props;

		if (userOfErrors > mistakes && pathname !== AppRoute.LOSE) {
			return history.push(AppRoute.LOSE);
		}

		if (isFailTime && pathname !== AppRoute.FAILTIME) {
			return history.push(AppRoute.FAILTIME);
		}
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

	renderGame = () => {
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
			},
			history
		} = this.props;

		if (error) {
			return <div>Ошибка, обновите страницу</div>
		}
		
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

	render() {
		return (
			<Switch>
				<Route exact path={AppRoute.ROOT} >
					{this.renderGame()}
				</Route>
				<Route exact path="/auth">
					<div>auth</div>
				</Route>
				<Route exact path={AppRoute.LOSE}>
					<FailTries handleRepeatClick={() => this.props.dispatch(gameReset())} />
				</Route>
				<Route path={AppRoute.FAILTIME}>
					<FailTime hadnleClick={() => this.props.dispatch(gameReset())} />
				</Route>
			</Switch>
		)
		
	}
};
