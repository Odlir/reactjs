import React, { Component } from "react";
import Input from './common/input'

export default class LoginForm extends Component {

    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {}
    };

    validate = () => {
        const errors = {};
                const { account } = this.state;
                if (account.username.trim() === '')
                    errors.username = 'UserName is required';

                if (account.password.trim() === '')
                    errors.password = 'Password is required';

         return Object.keys(errors).length === 0 ? null: errors;
    }

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if ( errors ) return;
    };

    handleChange = ({ currentTarget: input }) => {
            const account = {...this.state.account};
            account[input.name] = input.value;
            this.setState({ account });
        };

    render() {
    const { account, errors } = this.state;
        return (
            <div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
				    <Input
				        value={account.username}
				        name="username"
				        label="Username"
				        error={errors.username}
				        onChange={this.handleChange} />
				    <Input
                        value={account.password}
				        name="password"
                        label="Password"
                        error={errors.password}
                        onChange={this.handleChange} />
                    <button className="btn btn-primary">Login</button>
				</form>
            </div>
        );
    }
};
