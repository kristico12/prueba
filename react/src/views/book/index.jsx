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
import NewBook from './new.jsx';
import Alert from '../../components/alert.jsx';

class Book extends Component {
    constructor() {
        super();
        this.state = {
            book: {},
            loading: true,
            infoDetail: {},

            modalNew: false,

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
                        <label onClick={() =>
                            this.setState({
                                infoDetail: this.state.attributes.get('array').get(key),
                                modalEdit: true,
                            })}>
                            Edit
                        </label>
                    </span>
                )
            }
		];
        return (
            <div>
                <Alert
                    error={this.props.error}
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
                            <NewBook
                                actions={this.props.actions}
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