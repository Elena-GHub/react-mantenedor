import React, { Component } from 'react';

export default class List extends Component {
    render() {
        const { data } = this.props
        return(
            <ul>
                {data.map(x =>
                    <li key={x.id}>{x.name} <button>Edit</button></li>)}
            </ul>
        )
    }
}
