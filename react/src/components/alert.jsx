//Dependencies
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: this.props.success,
            error: this.props.error,
            warning: this.props.warning,
        };
    }
    // New Cicle of Life React, replace 'componentWillReceiveProps'
    static getDerivedStateFromProps(props, state) {
        if (props.success !== state.success) {
            return {
                success: props.success
            };
        }
        if (props.error !== state.error) {
            return {
                error: props.error
            };
        }
        if (props.warning !== state.warning) {
            return {
                warning: props.warning
            }
        }
        return null
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.success !== this.state.success && this.state.success.length > 0) {
            toast.success(this.state.success, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: this.props.timeSuccess
            })
        }
        if (prevState.error !== this.state.error && this.state.error.length > 0) {
            toast.error(this.state.error, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: this.props.timeError
            })
        }
        if (prevState.warning !== this.state.warning && this.state.warning.length > 0) {
            toast.warn(this.state.warning, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: this.props.timeWarning
            })
        }
    }
    render() {
        return (
            <ToastContainer />
        );
    }
}
Alert.defaultProps = {
    success: '',
    warning: '',
    error: '',
    timeSuccess: 5000,
    timeError: 5000,
    timeWarning: 5000,
};

export default Alert;