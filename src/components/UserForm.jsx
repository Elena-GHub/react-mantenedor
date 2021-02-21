import React, { Component } from 'react';

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = "This field must be filled in"
    }
    if (!values.email) {
        errors.email = "This field must be filled in"
    }
    if (!values.website) {
        errors.website = "This field must be filled in"
    }

    return errors
}

export default class UserForm extends Component {
    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, ...noErrors } = this.state
        const result = validate(noErrors)
        this.setState({ errors: result })
        if (!Object.keys(result).length) {
            const { handleSubmit } = this.props
            handleSubmit(noErrors)
            // send form
            e.target.reset()
        }
    }

    render() {
        const { errors } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Name" name="name" onChange={this.handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input placeholder="Email" name="email" onChange={this.handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input placeholder="Website" name="website" onChange={this.handleChange} />
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Send" />
            </form>
        )
    }
}
