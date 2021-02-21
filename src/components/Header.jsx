import React, { Component } from 'react';

const styles = {
    inline: {
        display: 'inline',
    }
}

export default class Header extends Component {
    render() {
        const { createNewUser } = this.props
        return (
            <header>
                <h2 style={styles.inline}>Users</h2>
                <button onClick={createNewUser} style={styles.inline}>New user</button>
            </header>
        )
    }
}
