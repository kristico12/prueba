// Dependencies
import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//utils
import { validateEmail } from '../utils/validate';

//Actions
import actions from '../redux/reducers/auth/actions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            credential : {
                email: '',
                password: '',
            },
            loading: false,
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
    send() {
        this.setState({
            loading: true,
        }, async () => {
            function validate(data) {
                let { email, password } = data;
                email = email.trim();
                password = password.trim();
    
                let bool = false, error = '';
                if (email.length === 0 && password.length === 0) {
                    error = 'Complete los Campos';
                } else if (!validateEmail(email)) {
                    error = 'Email Invalido';
                } else if (password.length <= 5) {
                    error = 'Password Invalido, Minimo 6 Caracteres';
                } else {
                    bool = true;
                }
                return {
                    bool,
                    error,
                }
            }
            const isValid = validate(this.state.credential);
            if (isValid.bool) {
                console.log('se fue');
            } else {
                await this.props.actions.AlertError(isValid.error)
            }

        })
    }
    render() {
        const input = [
            { type: 'text', value: this.state.credential.email, label: 'Email:', name: 'email' },
            { type: 'password', value: this.state.credential.password, label: 'Password:', name: 'password' }
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
                    <button type="button" onClick={() => this.send()}>Enviar</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        token: state.get('Auth').get('Data'),
        error: state.get('Auth').get('Error'),
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);