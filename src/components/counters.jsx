import React, { Component } from "react";
import Counter from '../components/counter'

class Counters extends Component {

    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button className="btn btn-primary" onClick={onReset} >Reset</button>
                { counters.map( counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete}
                        onReset={onReset}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
