import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInSeconds: this.props.timeInSeconds
    }
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick(123), 100)
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  tick = (cb) => () => {
    const {
      timeInSeconds
    } = this.state;

    this.setState({
      timeInSeconds: this.state.timeInSeconds - 1
    })
  }

  render() {
    const {
      timeInSeconds
    } = this.state;


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