import React from "react";
import ReactMarkdown from "react-markdown";

export default class Article extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <ReactMarkdown source={this.props.content} />
        );
    }
}
