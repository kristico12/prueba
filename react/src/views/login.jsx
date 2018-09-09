// Dependencies
import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            credential : {
                email: '',
                password: '',
            }
        }
    }
    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const credential = Object.assign({},this.state.credential);
        credential[name] = value;
        this.setState({credential});
    }
    render() {
        const input = [
            { type: 'text', value: this.state.credential['email'], label: 'Email:', name: 'email' },
            { type: 'password', value: this.state.credential['password'], label: 'Password:', name: 'password' }
        ]
        return (
            <div>
                <form>
                    {
                        input.map((value) => (
                            <label key={value.name}>
                                {value.label}
                                <input
                                    type={value.type}
                                    value={value.value}
                                    name={value.name}
                                    onChange={(e) => this.onChange(e)}
                                />
                            </label>
                        ))
                    }
                </form>
            </div>
        )
    }
}
export default Login;