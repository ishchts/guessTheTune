import React from 'react';
import renderer from "react-test-renderer";

import { questions } from '../../src/mocks/questions';
import GameGenre from '../../src/components/GameGenre/GameGenre';

const [first] = questions;

const {
  type,
  title,
  rightAnswer,
  possibleErrors,
  timeline,
  answers,
} = first;

it('render GameGenre component', () => {
  const tree = renderer.create(<GameGenre
    type={type}
    title={title}
    rightAnswer={rightAnswer}
    possibleErrors={possibleErrors}
    timeline={timeline}
    answers={answers}
  />).toJSON();

  expect(tree).toMatchSnapshot();


});