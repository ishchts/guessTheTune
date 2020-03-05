import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';



export default class Audio extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      isLoading: false,
      isError: false,
      isSuccess: false,
      isPlayning: false,
      progress: 0,
    }
  }

  componentDidMount() {
    const audio = this.audioRef.current.querySelector('audio');
  }

  componentDidUpdate() {
    const audio = this.audioRef.current.querySelector('audio');
    const { isPlayning } = this.state;

    if (isPlayning) {
      return audio.play();
    }

    if (!isPlayning) {
      this.audioRef.current.classList.remove('js-current');
      return audio.pause();
    }


    return null;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  startPlay = (e) => {
    e.preventDefault();
    this.setState({
      isPlayning: !this.state.isPlayning,
    })
  }

  render() {
    const { src, genre } = this.props;
    const { isPlayning } = this.state;

    const playBtnClass = classNames({
      'track__button': true,
      'track__button--play': !isPlayning,
      'track__button--pause': isPlayning
    });

    return (
      <div className="track js-track" ref={this.audioRef}>
        <button onClick={this.startPlay} className={playBtnClass} type="button"></button>
        <div className="track__status">
          <audio src={src} />
        </div>
      </div>

    )
  }

};

Audio.propTypes = {
  isLoading: propTypes.bool,
};