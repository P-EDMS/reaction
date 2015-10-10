import {SET_VISIBILITY_FILTER, ADD_TODO} from './actions';

const initialState = {
    visibilityFilter: 'SHOW_COMPLETED',
    todos: []
};

export default function todoApp(action, state = initialState) {

    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
               visibilityFilter: action.filter
            });
            break;
        case ADD_TODO:
            let todo = {text: action.text, complete: false};

            return Object.assign({}, state, {
                todos: [...state.todos, todo]
            });
            break;
    }

    return state;
}