import React, { Component } from "react";
import Axios from "axios";
import "./AddPerson.css";

class AddPerson extends Component {
    state = {
        name: "",
        todos: []

    };

    componentDidMount() {
        console.log('hi john');
        fetch("https://fathomless-spire-66407.herokuapp.com/todos")
            .then(response => response.json())
            .then(data => this.setState({ todos: data }));
    }
    renderTodos = () => {
        return this.state.todos.map(todo => {
            return (
                <div className="todo-item">
                    <p>
                        {todo.title}
                    </p>
                    <button onClick={() => this.deleteItem(todo.id)}>
                        X
        </button>
                </div>
            );
        });
    };
    nameChangedHandler = event => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        Axios({
            method: "post",
            url: "https://fathomless-spire-66407.herokuapp.com/add-todo",
            headers: { "content-type": "application/json" },
            data: {
                title: this.state.name,
                done: false
            }
        })
            .then(data => {
                this.setState({
                    todos: [...this.state.todos, data.data],
                    name: ""
                });
            })
            .catch(error => console.log(error));
    };

    deleteItem = id => {
        fetch(`https://fathomless-spire-66407.herokuapp.com/todo/${id}`, {
            method: "DELETE"
        }).then(
            this.setState({
                todos: this.state.todos.filter(item => {
                    return item.id !== id;
                })
            })
        );
    };

    render() {
        return (
            <div className="AddPerson">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={this.nameChangedHandler}
                        value={this.state.name}
                    />
                    <button>
                        Add Me
        </button>
                </form>

                {this.renderTodos()}
            </div>

        );
    }
}

export default AddPerson;
