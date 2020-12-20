import React from 'react';
import Form from './components/Form.js'
import List from './components/List.js'   

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      todos: [],
    }
  }

  handleChange = (e) => {
    this.setState ({ value : e.target.value })  //入力された文字
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.value === '') return  //空文字の登録を不可にする
    this.state.todos.push(this.state.value)  //todosにvalueを追加
    this.setState({  //setState()内でstateの値を変更
      todos: this.state.todos,
      value: '',  //フォームに入力されている文字を空にする
    })
  }

handleSubmit = (e) =>{
  e.preventDefault();
  if(this.state.value === '') return
  this.state.todos.push(this.state.value)
  this.setState({
    todos: this.state.todos,
    value: '',
  })
}

handleRemove = (i) =>{
  this.state.todos.splice(i,1)
  this.setState({
    todos: this.state.todos
  })
}

  render(){
    return(
      <React.Fragment>
        <Form   //Formコンポーネントに関数とstateを渡す
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <List
        todos={this.state.todos}
        handleRemove={this.handleRemove}
        />
      </React.Fragment>
    )
  }
}

export default App;