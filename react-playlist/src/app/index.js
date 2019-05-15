var React = require("react")
var ReactDOM = require("react-dom")
require("./css/index.css")
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var TodoItem = require('./todoItem')
var AddItem = require("./addItem")
var About = require("./about")

var App = React.Component({
    render:function () {
        return(
            <Router  history={browserHistory}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
                <Route path='/' component={TodoComponent}></Route>
                <Route path='/about' component={About}></Route>

            </Router >
        )
    }
})

var TodoComponent = React.createClass({
    getInitialState: function () {
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
            age: 30
        }
    },
    render: function () {
        var todos = this.state.todos
        todos = todos.map(
            function (item, index) {
                return (
                    // <li>{item}</li>
                    <TodoItem item={item} key={index} onDelete={this.onDelete}></TodoItem>
                )
            }.bind(this)
            // 这里不使用箭头函数就可以bind（this）
        )
        // var ager = setTimeout(() => {
        //     this.setState({
        //         age: 25,
        //     })
        // }, 3000);
        return (
            <div id="todo-list">
                <h1 onClick={this.clicked}>我是贾晓乐</h1>
                <p>GetHeroLevelRequiredToUpgrade</p>
                <p>{this.props.mssg}</p>
                <p><strong>name</strong>{this.props.cheese.name}</p>
                <p><strong>age</strong>{this.props.cheese.age}</p>
                <p><strong>hometown</strong>{this.props.cheese.hometown}</p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>

                <AddItem onAdd={this.onAdd}></AddItem>
                {/* <ListComponent todos={this.state.todos}></ListComponent> */}
            </div>
        )
    },
    // 自定义的点击函数
    clicked: function () {
        console.log("点击成功")
    },
    onDelete: function (item) {
        var updatedTodos = this.state.todos.filter(
            function (val, index) {
                return item !== val;
            }
        );
        this.setState({
            todos: updatedTodos
        })
    },
    onAdd: function (item) {
        var updatedTodos = this.state.todos
        updatedTodos.push(item)
        this.setState({
            todos: updatedTodos
        })
    },
    componentWillMount: function () {
        console.log('componetWillMount')
    },
    componentDidMount: function () {
        console.log('componetDidMount')
    },
     componentWillUpdate: function () {
        console.log('componetWillUpdate')
    }
});
var mycheese = {
    name: "贾晓乐",
    age: '22',
    hometown: "henan"
}




ReactDOM.render(<App mssg="i like cheese" cheese={mycheese}></App>, document.getElementById("todo-wrapper"))