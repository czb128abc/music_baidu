var types = require('./../constant/todoActionTypes');

//初始化状态
var initialState = [{
    text: 'Use Redux',
    completed: false,
    id: 0
},{
    text: 'Use Redux2',
    completed: true,
    id: 1
}];

var {
    ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED
} = types;

function todos(state = initialState, action) {
    console.log("----> exec reducer todo");
    switch (action.type) {
        case ADD_TODO:
            return [{
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ]
        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                Object.assign({}, todo, {
                    text: action.text
                }) :
                todo
            )

        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                Object.assign({}, todo, {
                    completed: !todo.completed
                }) :
                todo
            )

        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => Object.assign({}, todo, {
                completed: !areAllMarked
            }))

        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false)

        default:
            return state
    }

}
//////exports.todos = todos; 出问题了 
module.exports = todos;
