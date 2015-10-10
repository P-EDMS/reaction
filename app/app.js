import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./addtodo";
import TodoList from "./todolist";
import Footer from "./footer";
import Reducer from "./reducers";
import {SET_VISIBILITY_FILTER, ADD_TODO, VisibilityFilters, COMPLETE_TODO} from "./actions";



//state#1
let arrTodo = [{
        text: 'Consider using Redux',
        completed: true
    }, {
        text: 'Keep all state in a single tree',
        completed: false
}];
//state#2
let visibilityFilter = VisibilityFilters.SHOW_COMPLETED;

function onAddClick(text) {
    let action = {
        type: ADD_TODO,
        text: text
    };

    console.log(Reducer(action));
}

function onTodoClick(index) {
    let action = {
        type: COMPLETE_TODO,
        index: index
    };

}

function onFilterChange(nextFilter) {

    let action = {
        type: SET_VISIBILITY_FILTER,
        filter: nextFilter
    };

    console.log(Reducer(action));

}

ReactDOM.render(

    <div>
        <AddTodo onAddClick={onAddClick} />
        <TodoList todos={arrTodo} onTodoClick={onTodoClick}></TodoList>
        <Footer filter={visibilityFilter} onFilterChange={onFilterChange}></Footer>
    </div>

    , document.getElementById('my_app')
);


