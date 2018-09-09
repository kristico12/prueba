// Dependencies
import React from 'react';

function Table(props) {
    let rows = [];
    if (!props.loading) {
        rows = props.data.map(data => (
            <tr key={data.get(props.id)}>
                {
                    props.columns.map(column => (
                        <td key={column.title} >
                            {column.render ? column.render(data.get(column.key)) :  data.get(column.key)}
                        </td>
                    ))
                }
            </tr>
          )).toArray();
    }
    return (
        <table className="Table">
            <thead>
            <tr key="row">
                {props.columns.map(column => (
                /* eslint-disable jsx-a11y/no-static-element-interactions */
                    <th
                        key={column.title}
                    >
                        {
                            column.title
                        } &nbsp;
                    </th>
                /* eslint-enable jsx-a11y/no-static-element-interactions */
            ))}
            </tr>
            </thead>
            <tbody>
                {
                    props.loading ?
                        <tr>loading...</tr>
                    : rows
                }
            </tbody>
        </table>
    )
}

export default Table;