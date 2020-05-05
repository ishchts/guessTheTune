
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import formNames from '../../constants/form';

@reduxForm({
	form: formNames.artistForm,
})
export default class FormArtist extends Component {
    componentDidUpdate() {
        const {
            handleSubmit
        } = this.props;
    }

    handleChange = (e) => {
        this.props.onSubmit({ answer: e.target.value });
    }

	renderArtistItems = () => {
        const {
            items
        } = this.props;

        return items.map(({ artist, picture }, index) => {
            return (
                <div className="artist" key={artist}>
                    <Field
                        component={'input'}
                        type={'radio'}
                        name="answer"
                        value={`artist-${index}`}
                        id={`artist-${index}`}
                        className="artist__input visually-hidden"
                        onChange={this.handleChange}
                    />
                    <label className="artist__name" htmlFor={`artist-${index}`}>
                    <img className="artist__picture" src={picture} alt={artist} />
                        { artist }
                    </label>
                </div>
            )
        })

    }
    
    render() {
        const {
            handleSubmit
        } = this.props;

        return (
            <form onSubmit={(handleSubmit)} className="game__artist">
                {this.renderArtistItems()}
            </form>
        )

    }
}