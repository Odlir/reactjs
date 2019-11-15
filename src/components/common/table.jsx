import React, { Component } from "react";
import TableHeader from './tableHeader'
import TableBody from './tableBody'

export default class Table extends Component {
    render() {
        const { columns, sortColumn, onSort, data} = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    onSort={onSort}
                    sortColumn={sortColumn} />
                <TableBody
                    columns={this.columns}
                    data={data} />
            </table>
        );
    }
}
