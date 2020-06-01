import * as React from 'react';

interface IMistakesProps {
	userOfErrors: number
}

const Mistakes = ({
	userOfErrors
  }: IMistakesProps
) => {
	let wrongItem = [];

	for (let i = 0; i < userOfErrors; i++) {
		wrongItem = [...wrongItem, <div key={i} className="wrong"></div>,];
	}

	return (
		<div className="game__mistakes">
			{wrongItem}
		</div>
	);
};

export default Mistakes;