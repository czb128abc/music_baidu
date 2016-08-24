import React from 'react';
// import TodoFilters from './../constant/TodoFilters.js';
import TodoItem from './TodoItem.jsx';
import Footer from './Footer.jsx';
var {PropTypes,Component} = React;
var TodoFilters = {
    SHOW_ALL:'show_all',
    SHOW_COMPLETED:'show_completed',
    SHOW_ACTIVE:'show_active'
};
var { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = TodoFilters;

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
    constructor(props,context){
        super(props,context)
        this.state = { filter: SHOW_ALL }
    }

    renderToggleAll (completedCount){
        let {todos ,  actions} = this.props;

        if(todos.length>0){
            return (
                <input
                    className="toggle-all"
                    type="checkbox"
                    checked={completedCount === todos.length}
                    onChange={actions.complateAll}/>
            )
        }
    }

    handleShow(filter){
        this.setState({filter:filter})
    }

    handleClearCompleted(){
        ////////
        const  atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
        if(atLeastOneCompleted){
            this.props.actions.clearComplated()
        }

    }

    rendFooter(completedCount){
        const {todos} = this.props;
        const {filter} = this.state;
        const activeCount = todos.length-completedCount

        if(todos.length){
            return (
                <Footer
                    activeCount = {activeCount}
                    filter = {filter}
                    complatedCount={completedCount}
                    onShow={this.handleShow.bind(this)}
                onClearCompleted={this.handleClearCompleted.bind(this)}>

                </Footer>
            )
        }

    }

    render () {
        const {todos , actions } = this.props
        const  {filter} = this.state
        /*if(typeof todos === 'undefined'){
            todos = [{
                text: 'Use Redux',
                completed: false,
                id: 0
            }]
        }*/
        const filteredTodos = todos.filter(TODO_FILTERS[filter])

        const completedCount = todos.reduce((count, todo) =>{
            todo.completed ? count+1:count
                ,0
        })

        return (
            <section className="main">
                {this.renderToggleAll(completedCount)}
                <ul className="todo-list">
                    {
                        filteredTodos.map(todo =>
                            <TodoItem key={todo.id} todo={todo} {...actions}></TodoItem>
                        )
                    }
                </ul>
                {this.rendFooter(completedCount)}
            </section>
        )
    }


}


export default MainSection;
