import React from "react";
import Header from "./header";
import Article from "./article";

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = window.__data;
    }
    render () {
        return (
            <div>
                <Header title={this.state.title} pages={this.state.sitePages} />
                <Article content={this.state.markdown} />
            </div>
        );
    }
}
