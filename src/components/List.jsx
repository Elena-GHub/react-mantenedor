import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return(
            <ul>
                <li>User 1 <button>Edit</button></li>
                <li>User 2 <button>Edit</button></li>
            </ul>
        )
    }
}
