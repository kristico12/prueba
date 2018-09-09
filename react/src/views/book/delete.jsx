// Dependencies
import React, { Component, Fragment } from 'react';

// Components
import Loading from '../../components/loading.jsx';

class DeleteBook extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
        }
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.info !== this.props.info) {
            await this.props.actions.AlertSuccess('Eliminado Correctamente');
            await this.props.actions.AlertSuccess('');
            this.props.back();
        }
    }
    delete(e) {
        e.preventDefault();
        this.setState({
            loading: true
        }, async () => {
            await this.props.actions.BookDelete(this.props.detail)
        })
    }
    render() {
        return (
            <Fragment>
                <form onSubmit={(e) => this.delete(e)}>
                    <span>Esta Seguro de Borrar a: {this.props.detail[this.props.name]}</span>
                    <div>
                        <button type="button" onClick={() => this.props.back()}>Atras</button>
                        <button>Aceptar</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}
export default DeleteBook;