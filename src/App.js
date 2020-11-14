import { Layout} from 'antd';
import React,{Component} from 'react';
import Add from './Add';
import Todos from './Todos';


const { Header,Content } = Layout;

class App extends Component {
  state = {
    data :[]
  }
  addTodo = (todo)=>{
     todo.id = Math.random();
     let todos = [...this.state.data,todo];
     todos.map((todo)=>{
       localStorage.setItem(JSON.stringify(todo.id), JSON.stringify(todo));
     })
     this.setState({
       data: todos
     });
    
  }

  deleteTodo = (id)=>{
    const todos = this.state.data.filter((todo)=>{
       return todo.id != id;
    });
    localStorage.removeItem(JSON.stringify(id));
    this.setState({
      data: todos
    });

  }

  editTodo = (index)=>{
    const newTodo = prompt('New todo:');
    const {data} = this.state;
    data.filter((item)=>{
      if(item.id === index){
        item.content = newTodo;
      }
      return item;
    });
    this.setState({
      data
    })
  }

  render(){
   return (
    <div className="App">
      <Layout>
        <Header className="header">
          todo list
        </Header>
        <Content className="content">
          <Add addTodo={this.addTodo}/>
          <Todos data={this.state.data} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
        </Content>
      </Layout>
    </div>
  );
  }
}

export default App;
