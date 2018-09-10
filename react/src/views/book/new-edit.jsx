// Dependencies
import React, { Component, Fragment, createRef } from 'react';
import Loading from '../../components/loading.jsx';

// Themes
import { inputTheme, labelFormTheme, buttomSendTheme, buttomCancelTheme} from '../../themes/index';

class NewEditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                id: this.props.detail.id,
                name: this.props.detail.name,
                editorial: this.props.detail.editorial,
                authors: this.props.detail.authors.slice(),
            },
            loading: false,
        }
        this.valAutor = createRef();
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.info !== this.props.info) {
            if (this.props.detail.id === 0) {
                await this.props.actions.AlertSuccess('Guardado Correctamente');
            } else {
                await this.props.actions.AlertSuccess('Actualizado Correctamente');
            }
            this.props.back();
            await this.props.actions.AlertSuccess('');
        }
    }
    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const book = Object.assign({},this.state.book);
        book[name] = value;
        this.setState({book});
    }
    async addAuthors(data) {
        const book = Object.assign({},this.state.book);
        const array = this.state.book.authors;
        if (!array.every((info) => info.name !== data)) {
            await this.props.actions.AlertError('Este Author A sido Añadido');
        } else if (data.length < 3) {
            await this.props.actions.AlertError('Nombre de Autor Invalido');
        } else {
            array.push({name: data});
            book['authors']= array;
            this.setState({book});
        }
        await this.props.actions.AlertError('');
    }
    removeAuthors(i) {
        const book = Object.assign({},this.state.book);
        const array = this.state.book.authors;
        array.splice(i, 1);
        book['authors']= array;
        this.setState({book});
    }
    Send(e) {
        e.preventDefault();
        this.setState({
            loading: false,
        }, async () => {
            function Valid(data) {
                let { name, editorial, authors} = data;
                name = name.trim();
                editorial = editorial.trim();
                let bool = false, error = '';
                if (name.length === 0 && editorial.length === 0 && authors.length === 0) {
                    error = 'Complete los Campos';
                } else if (name.length < 3) {
                    error = 'Nombre Invalido';
                } else if(editorial.length <= 3) {
                    error = 'Editorial Invalida';
                } else if (authors.length === 0) {
                    error = 'Ingrese Un Autor';
                } else {
                    bool = true;
                }
                return {
                    bool,
                    error,
                }
            }
            const isValid = Valid(this.state.book);
            if (isValid.bool) {
                const time = new Date();
                const book = Object.assign({}, this.state.book);
                if (this.props.detail.id===0) {
                    book.id = time.getTime(); 
                    await this.props.actions.BookCreate(book);
                } else {
                    await this.props.actions.BookUpdate(book);
                }
            } else {
                await this.props.actions.AlertError(isValid.error);
                await this.props.actions.AlertError('');
            }
        })
    }

    render() {
        const input = [
            { type: 'text', value: this.state.book.name, label: 'Nombre:', name: 'name' },
            { type: 'text', value: this.state.book.editorial, label: 'Editorial:', name: 'editorial' }
        ]
        return (
            <Fragment>
                <form
                    className="form-content"
                    onSubmit={(e) => this.Send(e)}
                    onKeyPress={(e) => {
                        const charCode = e.which || e.keyCode;
                        if (charCode === 13) {
                            e.preventDefault()
                        }
                    }}>
                    <h4 className="title">{this.props.detail.id===0 ? "Agregar Nuevo Libro" : "Editar Libro"}</h4>
                    {
                            input.map((value) => (
                                <label key={value.name} className="labelFormTheme">
                                    {value.label}
                                    <input
                                        className="inputTheme"
                                        type={value.type}
                                        value={value.value}
                                        name={value.name}
                                        onChange={(e) => this.onChange(e)}
                                    />
                                </label>
                            ))
                    }
                    <div className="content-much-buttom">
                        <label
                            className="labelFormTheme label-margin"
                        >
                            Nombre Autor:
                            <input type="text" className="inputTheme" ref={this.valAutor} />
                        </label>
                        <button type="button" className="buttomSendTheme buttom-botoom" onClick={() => this.addAuthors(this.valAutor.current.value)}>Añadir</button>
                    </div>
                    <ul className="content-list">
                        {
                            this.state.book.authors.map((item, i) => (
                                <li key={item.name}>
                                    <span>{item.name}</span>
                                    <img src="static/img/delete.png" alt="Borrar" onClick={() => this.removeAuthors(i)}/>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="content-much-buttom">
                        <button className="buttomSendTheme">Guardar</button>
                        <button className="buttomCancelTheme" onClick={() => this.props.back()}>Atras</button>
                        {
                            this.state.loading &&
                                <Loading />
                        }
                    </div>
                </form>
                <style jsx>{`
                    .form-content {
                        padding: 2em 1em 1em 1em;
                        display: grid;
                        grid-template-rows: 3em auto;
                        grid-row-gap: 1em;
                    }
                    .title {
                        font-family: 'Abel', sans-serif;
                        text-transform: capitalizable;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5em;
                    }
                    .content-much-buttom {
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                    .label-margin {
                        margin-right: 1.5em;
                    }
                    .buttom-botoom {
                        position: relative;
                        top: 12px;
                    }
                    .content-list {
                        list-styled: none;
                    }
                `}</style>
                <style jsx>{inputTheme}</style>
                <style jsx>{labelFormTheme}</style>
                <style jsx>{buttomSendTheme}</style>
                <style jsx>{buttomCancelTheme}</style>
            </Fragment>
        )
    }
}
NewEditBook.defaultProps = {
    detail: {
        id: 0,
        name: '',
        editorial: '',
        authors: [],
    }
}

export default NewEditBook;