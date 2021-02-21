import React, { Component } from 'react';
import Header from './Header'
import List from './List'

export default class ViewList extends Component {
    render() {
        const { data, handleClick, createNewUser } = this.props
        return (
            <div>
                <Header createNewUser={createNewUser} />
                <List data={data} handleClick={handleClick}/>
            </div>
        )
    }
}
