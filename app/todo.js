import React, {Component, PropTypes} from "react";

export default class Todo extends Component {
    render() {
        let css = {textDecoration: this.props.completed? 'line-through': 'none'};
        return (
            <li style={css} onClick={this.props.onClick}>
                {this.props.text}
            </li>
        );
    };
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};