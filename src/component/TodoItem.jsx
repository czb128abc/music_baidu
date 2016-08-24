import React from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput.jsx'
var {PropTypes,Component} = React;


class TodoItem extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            editing: false
        }
    }

    handleSave(id,text){
        if(text.length===0){
            this.props.deleteTodo(id)
        }else{
            this.props.editTodo(id,text)
        }

        this.setState({editing: false})
    }

    handleDoubleClick(){
        this.setState({editing:true})
    }

    render(){
        const { todo, completeTodo, deleteTodo } = this.props
        const  theClass = classnames({
            completed: todo.completed,
            editing: this.state.editing
        })

        let element
        if(this.state.editing){
            element = (
                <TodoTextInput text={todo.text}
                               editing={this.state.editing}
                               onSave={(text)=>this.handleSave(todo.id,text)}>

                </TodoTextInput>
            )
        }else{
            element = (
            <div className="view">
                <input className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={()=>completeTodo(todo.id)}/>
                <label onDoubleClick={this.handleDoubleClick.bind(this)}>
                    {todo.text}
                </label>

            </div>
            )
        }

        return (
            <li className={theClass}>
                {element}
            </li>
        )
    }

}


export default TodoItem;