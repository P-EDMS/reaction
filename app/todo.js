import React, {Component, PropTypes} from "react";


export default class Todo extends Component {

    render() {
        return (
            <div> {this.props.text} </div>

        );
    };
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};