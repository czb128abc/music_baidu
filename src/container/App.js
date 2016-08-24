import React from 'react'

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import Header from  './../component/Header.jsx'
import MainSection from './../component/MainSection.jsx'

import TodoActions from './../action/todos.js'

class App extends React.Component {
    render() {
    	const {todos, actions} = this.props;
      return (
        <div>
          <Header addTodo={actions.addTodo}/>
          <MainSection  todos={todos} actions={actions} />
        </div>
      )
  }
}
function mapStateToProps(state) {
  console.log("--exec app mapStateToProps :");
  console.dir(state)
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions.todos, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

