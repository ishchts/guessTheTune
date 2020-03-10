import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';



export default class Audio extends Component {
  static defaultProps = {
    isPlayning: false,
  }

  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      isLoading: false,
      isError: false,
      isSuccess: false,
      progress: 0,
    }
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    const { isPlayning } = this.props;

    if (isPlayning) {
      this.audioRef.current.play();
    }

    if (!isPlayning) {
      this.audioRef.current.pause();
    }

    this.audioRef.current.oncanplaythrough = () => this.setState({
      isLoading: true,
    });

    return null;
  }

  render() {
    const {
      src,
      isPlayning,
      startTrack,
    } = this.props;

    const playBtnClass = classNames({
      'track__button': true,
      'track__button--play': !isPlayning,
      'track__button--pause': isPlayning
    });

    return (
      <>
        <button onClick={startTrack} className={playBtnClass} type="button"></button>
        <div className="track__status">
          <audio src={src} ref={this.audioRef} />
        </div>
      </>
    )
  }

};

Audio.propTypes = {
  isLoading: propTypes.bool,
  startTrack: propTypes.func,
  progress: propTypes.number,
};