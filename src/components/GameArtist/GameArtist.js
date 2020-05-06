import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';


import Header from './../Header';
import Audio from '../Audio';
import FormArtist from './FormArtist'

import { artistUserAnswer } from '../../redux/modules/gameRules/actions/artistUserAnswer';
import { stepNext } from '../../redux/modules/gameRules/actions/stepNext';

const artistTitle = 'Кто исполняет эту песню?';

const mapStateToProps = (state) => {
	const {
		gameRules: { currentQuestion: index },
		questions: {
			data,
		}
	} = state;

	const {
		song,
		answers
	} = data[index];

	return {
		song,
		answers,
		title: artistTitle,
	};
}

@connect(mapStateToProps)
export default class GameArtist extends Component {
	static propTypes = {
		title: propTypes.string,
		rightAnswer: propTypes.string,
		answers: propTypes.arrayOf(
			propTypes.shape({
				src: propTypes.string,
				artist: propTypes.string,
			})
		)
	}

	constructor(props) {
		super(props);
		this.state = {
			isPlayning: false,
		}
	}

	startTrack = () => {
		this.setState({ isPlayning: !this.state.isPlayning })
	}

	handleSubmit = (values) => {
		const { answer } = values;
		const {
			dispatch,
			answers,
			song: {
				artist,
			}
		} = this.props;

		dispatch(artistUserAnswer({
			userAnswer: answer,
			answers,
			rightArtist: artist,
		}));
		dispatch(stepNext());
		return;

	}

	render() {
		const {
			answers,
			title,
			song: {
				src
			}
		} = this.props;

		return (
			<section id="game-artist" className="game game--artist">
				<Header />
				<section className="game__screen">
					<h2 className="game__title">{ title }</h2>
					<div className="game__track">
						<div className="track">
							<Audio
								src={src}
								startTrack={() => this.startTrack()}
								isPlayning={this.state.isPlayning}
							/>
						</div>
					</div>
					<FormArtist
						onSubmit={this.handleSubmit}
						items={answers}
					/>
				</section>
			</section>
		);
	}
};