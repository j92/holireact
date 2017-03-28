import React, { Component } from 'react';

class Clock extends Component {

    constructor() {
        super();
        this.state = {date: new Date()}
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>It is {this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}

export default Clock;
