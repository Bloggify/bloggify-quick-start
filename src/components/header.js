import React from "react";
import Menu from "./menu";


export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <header>
                <Menu pages={this.props.pages} />
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}
