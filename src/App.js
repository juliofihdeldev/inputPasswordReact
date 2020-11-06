import React, { Component } from 'react'
import PasswordInput from './PasswordInput'

export default class Form extends Component {
    state = {}
    handleChange = (data) => {
        this.setState({
          [data.name]: data.value,
        });
        console.log("value", data.value)
    }
    
    render() {
        const { passwordField } = this.state;
        const value = passwordField && passwordField.value;
        return (
            <PasswordInput
                name="passwordField"
                placeholder="Password"
                value={value}
                showBar={true}
                onChange={this.handleChange}
            />
        )
    }
}
