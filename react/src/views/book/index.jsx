// Dependencies
import React, { Component } from 'react';
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
                    <span>
                        <img src="static/img/edit.png" onClick={() =>
                            this.setState({
                                infoDetail: this.state.book.get('array').get(key),
                                modalEdit: true,
                            })} />
                        <img src="static/img/delete.png" onClick={() =>
                            this.setState({
                                infoDetail: this.state.book.get('array').get(key),
                                modalDelete: true,
                            })} /> 
                    </span>
                )
            }
		];
        return (
            <div>
                <Alert
                    error={this.props.error}
                    success={this.props.success}
                />
                <button type="button" onClick={() => this.setState({modalNew: true})}>Agregar</button>
                <Table
                    columns={columns}
                    data={Map(Map.isMap(this.state.book) ? this.state.book.get('array') : [])}
                    id='id'
                    loading={this.state.loading}
                />
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
            </div>
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