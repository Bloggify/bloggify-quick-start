import React from "react";
import MenuItem from "./page-menu-item";

export default class Menu extends React.Component {
    renderPages () {
        return this.props.pages.map((c, key) => <MenuItem {...c} key={key} />);
    }
    render () {
        return (
            <ul>
                {this.renderPages()}
            </ul>
        );
    }
}
