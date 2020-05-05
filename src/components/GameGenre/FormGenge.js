import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

import Audio from "../Audio";

import formNames from '../../constants/form';

@reduxForm({
  form: formNames.formGenge,
})
export default class FormGenge extends Component {
  renderTracks = () => {
    const {
      answers,
      activeTrack,
      startTrack
    } = this.props;
    return answers.map((el, index) => (
      <div className="track" key={index}>
        <Audio
          src={el.src}
          isPlayning={index === activeTrack}
          startTrack={() => startTrack(index)}
        />
        <div className="game__answer">
          <Field
            component="input"
            type="checkbox"
            name={`answer-${index}`}
            className="game__input visually-hidden"
            value={`answer-${index}`}
            id={`answer-${index}`}
          />
          <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
        </div>
      </div>
    ));
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="game__tracks">
        {this.renderTracks()}
        <button disabled={pristine || submitting} type="submit" className="game__submit button">Ответить</button>
      </form>
    )
  }
};
