var types = require('./../constant/todoActionTypes.js');

// import types  from './../constant/todoActionTypes.js';
var todos = {
    addTodo: function(text){
        return {
            type: types.ADD_TODO, text:text
        }
    },
    deleteTodo: function(id){
        return {
            type: types.DELETE_TODO, id:id
        }
    },
    editTodo: function(id,text){
        return {
            type: types.EDIT_TODO,id: id, text:text
        }
    },
    completeTodo: function(id){
        return {
            type: types.COMPLETE_TODO, id:id
        }
    },
    complateAll: function(){
        return {
            type: types.COMPLETE_ALL
        }
    },
    clearComplate: function(){
        return {
            type: types.CLEAR_COMPLETED
        }
    }

};
console.dir(todos);
exports.todos = todos;