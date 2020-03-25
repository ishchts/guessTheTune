import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { gameTimer } from '../../redux/modules/gameRules/actions/gameTimer';
import { endTime } from '../../redux/modules/gameRules/actions/endTime';


class Timer extends Component {
  static defaultProps = {
    timeInSeconds: propTypes.number,
  }

  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick = () => () => {
    const {
      timeInSeconds,
    } = this.props;

    if (timeInSeconds <= 0) {
      return this.props.dispatch(endTime(this.timerId));
    }

    return this.props.dispatch(gameTimer());
  }

  render() {
    const {
      timeInSeconds,
    } = this.props;

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = `${timeInSeconds - minutes * 60}`.length === 1 ? `0${timeInSeconds - minutes * 60}`: timeInSeconds - minutes * 60;
    const proportion = timeInSeconds / 300;
    const stroke = Math.round(2 * Math.PI * 370);
    const offset = stroke - (stroke * proportion);

    return (
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
                  style={{
                    filter: "url(#blur)",
                    transform: "rotate(-90deg) scaleY(-1)",
                    transformOrigin: "center",
                    strokeDasharray: `${stroke}`,
                    strokeDashoffset: `${offset}`
                  }}/>
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">{minutes}</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">{seconds}</span>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    gameRules: {
      timeInSeconds
    }
  } = state;

  return {
    timeInSeconds
  };
}

export default connect(mapStateToProps)(Timer);