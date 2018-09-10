// Dependencies
import React, { Fragment } from 'react';

function Table(props) {
    let rows = [];
    if (!props.loading) {
        rows = props.data.map((data,i) => (
            <tr key={data.get(props.id)} className="tr-body">
                {
                    props.columns.map(column => (
                        <td key={column.title}>
                            {column.render ? column.render(data.get(column.key)) :  data.get(column.key)}
                        </td>
                    ))
                }
            </tr>
          )).toArray();
    }
    return (
        <Fragment>
            <table className="Table">
                <thead>
                    <tr>
                        {props.columns.map(column => (
                            <th
                                key={column.title}
                            >
                                {
                                    column.title
                                }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        rows
                    }
                </tbody>
                <style jsx>{`
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th {
                        text-transform: uppercase;
                        background-color: #ff3737;
                        color: white;
                        text-align: center;
                        padding: 5px;
                    }
                    tbody :global(.tr-body) {
                        background-color: #e2e2e2;
                        text-align: center;
                        padding: 3px;
                        height: 3em;
                    }                    
                `}</style>
            </table>
        </Fragment>
    )
}

export default Table;