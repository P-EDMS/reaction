import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./addtodo";
import Todo from "./todo";



var text = 'Hello, Alex and Mervyn!';
function onAddClick(t) {

    text = t;
    console.log(t);
}

ReactDOM.render(

    <div style={{'color':'blue'}}>
        <AddTodo onAddClick={onAddClick} />
        <Todo text={text} completed={true} onClick={onAddClick} />
    </div>

    , document.getElementById('my_app')
);

