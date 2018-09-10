// Dependencies
import React, { Component, Fragment } from 'react';

// Themes
import { buttomSendTheme, buttomCancelTheme} from '../../themes/index';

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
                <form onSubmit={(e) => this.delete(e)} className="form-content">
                    <h4 className="title">Esta Seguro de Borrar a: {this.props.detail[this.props.name]}</h4>
                    <div className="content-much-buttom">
                        <button className="buttomCancelTheme" type="button" onClick={() => this.props.back()}>Atras</button>
                        <button className="buttomSendTheme">Aceptar</button>
                        {
                            this.state.loading && <Loading />
                        }
                    </div>
                </form>
                <style jsx>{`
                    .form-content {
                        padding: 2em 1em 1em 1em;
                        display: grid;
                        grid-template-rows: 2em auto;
                        grid-row-gap: .5em;
                    }
                    .content-much-buttom {
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                    .title {
                        font-family: 'Abel', sans-serif;
                        text-transform: capitalizable;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5em;
                    }
                `}</style>
                <style jsx>{buttomSendTheme}</style>
                <style jsx>{buttomCancelTheme}</style>
            </Fragment>
        )
    }
}
export default DeleteBook;