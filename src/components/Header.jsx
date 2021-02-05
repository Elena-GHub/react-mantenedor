import React, { Component } from 'react';

const styles = {
    inline: {
        display: 'inline',
    }
}

export default class Header extends Component {
    render() {
        return (
            <header>
                <h2 style={styles.inline}>Users</h2>
                <button style={styles.inline}>New user</button>
            </header>
        )
    }
}
