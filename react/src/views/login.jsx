// Dependencies
import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from 'react-router-dom';

//Components
import Alert from '../components/alert.jsx';
import Loading from '../components/loading.jsx';

//utils
import { validateEmail } from '../utils/validate';

//Actions
import actions from '../redux/reducers/auth/actions';

// Themes
import { inputTheme, labelFormTheme, buttomSendTheme, checkboxTheme } from '../themes/index';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            credential : {
                email: '',
                password: '',
            },
            session: false,
            loading: false,
        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            if (this.props.token !== null) {
                await this.props.actions.AlertError('');
                this.props.history.replace('/');
            }
        }
    }
    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (name === "session") {
            this.setState({[name]: value})
        } else {
            const credential = Object.assign({},this.state.credential);
            credential[name] = value;
            this.setState({credential});
        }
    }
    send(e) {
        e.preventDefault();
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
                await this.props.actions.SingIn(this.state.credential, this.state.session)
            } else {
                await this.props.actions.AlertError(isValid.error)
            }
            this.setState({loading: false})

        })
    }
    render() {
        const input = [
            { type: 'text', value: this.state.credential.email, label: 'Email:', name: 'email' },
            { type: 'password', value: this.state.credential.password, label: 'Password:', name: 'password' },
            { type: 'checkbox', value: this.state.session, label: 'Mantener Session:', name: 'session' }
        ]
        return (
            <Fragment>
                <Alert
                    error={this.props.error}
                />
                <div className="login-container">
                    <form
                        className="form-container"
                        onKeyPress={(e) => {
                            const charCode = e.which || e.keyCode;
                            if (charCode === 13) {
                                this.send();
                            }
                        }}
                        onSubmit={(e) => this.send(e)}
                    >
                        <div
                            className="login-title"
                        >
                            <h1 className="title">Bienvenidos</h1>
                        </div>
                        {
                            input.map((value) => (
                                <label
                                    key={value.name}
                                    className="labelFormTheme"
                                >
                                    {value.label}
                                    <input
                                        className={(value.type !== "checkbox") ? "inputTheme" : "checkboxThemeInput"}
                                        type={value.type}
                                        value={(value.type !== "checkbox") && value.value}
                                        name={value.name}
                                        onChange={(e) => this.onChange(e)}
                                        checked={(value.type === "checkbox") && value.value}
                                    />
                                    {
                                        value.type === "checkbox" &&
                                            <span className="checkboxThemeSpan" />
                                    }
                                </label>
                            ))
                        }
                        <div>
                            <button className="buttomSendTheme">Enviar</button>
                            {
                                this.state.loading &&
                                    <Loading />
                            } 
                        </div>
                    </form>
                </div>
                <style jsx>{`
                    @import url('https://fonts.googleapis.com/css?family=Abel');
                    .login-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        height: 100%;
                        background: linear-gradient(
                            to right, rgba(179,220,237,1) 0%, rgba(179,220,237,1) 1%, rgba(98,199,232,1) 50%, rgba(41,184,229,1) 84%, rgba(188,224,238,1) 100%
                        );
                    }
                    .login-title {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .title {
                        font-family: 'Abel', sans-serif;
                        text-transform: uppercase;
                        font-size: 3em;
                    }
                    .form-container {
                        display: grid;
                        grid-template-rows: 5em auto;
                        grid-row-gap: 1em;
                        padding: 2em;
                        background-color: white;
                        box-shadow: 9px 3px 9px -3px rgba(74,70,74,1);
                        border-radius: 15px 15px 0 0;
                    }
                `}</style>
                <style jsx>{inputTheme}</style>
                <style jsx>{labelFormTheme}</style>
                <style jsx>{buttomSendTheme}</style>
                <style jsx>{checkboxTheme}</style>
            </Fragment>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));