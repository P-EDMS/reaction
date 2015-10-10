import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";

export default class AddTodo extends Component {

    render() {
        this.refs = {};
        return (
            <div>
                <input type='text' ref= {ref => this.refs.txtTodoItem = ref} />
                <button type='button' onClick={e => this.innerHandleClick(e)}>
                    Add
                </button>
            </div>
        );
    };

    innerHandleClick(e) {
        const node = ReactDOM.findDOMNode(this.refs.txtTodoItem);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
};

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};
