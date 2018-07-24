import React, { Component } from 'react'

export default class AccountListScreen extends Component {

    constructor() {
        super();
    }

    renderItems() {
        const items = [
            "Example",
            "Three",
            "Pulp fiction",
            "Cosmo y Wanda",
            "EPN",
            "Burro de shrek",
            "Cafe andati",
            "Zapatos de tacon"
        ];
        return items.map((item) => (<li className="listItem">{item}</li>));
    }

    render() {
        return (
            <div class="">
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        )
    }
}