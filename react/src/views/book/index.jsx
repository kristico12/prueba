// Dependencies
import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Map } from 'immutable';

// Call
import actions from '../../redux/reducers/book/actions';

// Components
import Table from '../../components/table.jsx';
import Modal from '../../components/modal.jsx';
import NewEditBook from './new-edit.jsx';
import Alert from '../../components/alert.jsx';
import DeleteBook from './delete.jsx';

class Book extends Component {
    constructor() {
        super();
        this.state = {
            book: {},
            loading: true,
            infoDetail: {},

            modalNew: false,
            modalEdit: false,
            modalDelete: false,

        }
    }
    async componentDidMount() {
        await this.props.actions.BookLoad();
        this.setState({loading: false})
    }
    componentDidUpdate(prevProps) {
        if (prevProps.book !== this.props.book) {
            this.setState({
                book: this.props.book,
            })
        }
    }
    render() {
        const columns = [
			{
				title: 'Id',
				key: 'id'
			},
			{
				title: 'Nombre',
				key: 'name',
			},
			{
				title: 'Editorial',
				key: 'editorial',
            },
            {
                title: 'Opciones',
                key: 'id',
                render: (key) => (
                    <span className="content-img">
                        <img className="img" src="static/img/edit.png" onClick={() =>
                            this.setState({
                                infoDetail: this.state.book.get(key),
                                modalEdit: true,
                            })} />
                        <img className="img" src="static/img/delete.png" onClick={() =>
                            this.setState({
                                infoDetail: this.state.book.get(key),
                                modalDelete: true,
                            })} /> 
                    </span>
                )
            }
		];
        return (
            <Fragment>
                <Alert
                    error={this.props.error}
                    success={this.props.success}
                />
                <div className="content-buttom-table">
                    <button className="buttom-add" type="button" onClick={() => this.setState({modalNew: true})}>Agregar</button>
                    <Table
                        columns={columns}
                        data={Map(Map.isMap(this.state.book) ? this.state.book : [])}
                        id='id'
                        loading={this.state.loading}
                    />
                </div>
                {
                    this.state.modalNew &&
                        <Modal>
                            <NewEditBook
                                info={this.props.book}
                                actions={this.props.actions}
                                back={() => this.setState({modalNew: false})}
                            />
                        </Modal>
                }
                {
                    this.state.modalEdit &&
                        <Modal>
                            <NewEditBook
                                info={this.props.book}
                                actions={this.props.actions}
                                back={() => this.setState({modalEdit: false})}
                                detail={this.state.infoDetail.toJS()}
                            />
                        </Modal>
                }
                {
                    this.state.modalDelete &&
                        <Modal>
                            <DeleteBook
                                detail={this.state.infoDetail.toJS()}
                                name='name'
                                back={() => this.setState({modalDelete: false})}
                                actions={this.props.actions}
                                info={this.props.book}
                            />
                        </Modal>
                }
                <style jsx>{`
                    .content-buttom-table {
                        display: grid;
                        grid-template-rows: 2.5em auto;
                        grid-row-gap: 1.5em;
                    }
                    .buttom-add {
                        width: 6em;
                        cursor: pointer;
                        border-radius: 1em;
                        border: 1px solid #ffffff;
                        background-color: #d1d1d1;
                        color: #1323ec;
                    }
                    div :global(.content-img) {
                        display: flex;
                        justify-content: space-around;
                    }
                    div :global(.img) {
                        cursor: pointer;
                    }

                `}</style>
            </Fragment>
        )
    }
}
function mapStateToProps(state) {
    return {
        book: state.get('Book').get('Data'),
        success: state.get('Book').get('Success'),
        error: state.get('Book').get('Error')
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}


export default connect(mapStateToProps, mapDispatchToProps)(Book);