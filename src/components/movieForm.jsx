import React, { Component } from "react";

export default class MovieForm extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>Movie Form {match.params.id}</h1>
                <button onClick={() => this.props.history.push('/movies')} className="btn btn-primary">
                    Save
                </button>
            </div>
        );
    }
};
