import React from "react";

export default class MenuItem extends React.Component {
    render () {
        return (
            <li>
                <a href={this.props.path}>{this.props.metadata.title}</a>
            </li>
        );
    }
}
