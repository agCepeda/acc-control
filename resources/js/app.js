import React, { Component } from 'react'
import Nav from './components/nav'
import AccountListScreen from './screens/account-list'

export default class App extends Component {
    render() {
        return (
            <div class="app">
                <Nav />
                <AccountListScreen />
            </div>
        )
    }
}