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

    constructor(props) {
        super(props)
        this.state = {
            ...this.state,
            ...props.initialValues,
        }
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

        if (!Object.keys(result).length) {
            const { handleSubmit, handleUpdate, initialValues } = this.props
            if (initialValues.id) {
                handleUpdate(initialValues.id, noErrors)
            } else {
                handleSubmit(noErrors)
            }
        } else {
            this.setState({ errors: result })
        }
    }

    render() {
        const { errors } = this.state
        const { initialValues } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                <input defaultValue={initialValues.name} placeholder="Name" name="name" onChange={this.handleChange} />
                {errors.name && <p>{errors.name}</p>}
                <input defaultValue={initialValues.email} placeholder="Email" name="email" onChange={this.handleChange} />
                {errors.email && <p>{errors.email}</p>}
                <input defaultValue={initialValues.website} placeholder="Website" name="website" onChange={this.handleChange} />
                {errors.website && <p>{errors.website}</p>}
                <input type="submit" value="Send" />
            </form>
        )
    }
}
