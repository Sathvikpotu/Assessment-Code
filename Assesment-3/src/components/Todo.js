import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, completeTodo, getTodos } from "../actions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./App.css";

class Home extends Component {
	componentDidMount() {
		this.props.getTodos();
	}
	handleTodoAction = action => {
		const { type, payload } = action;
		switch (type) {
			case "create":
				this.props.addTodo(payload.task);
				break;
			case "delete":
				this.props.deleteTodo(payload.id);
				break;
			case "complete":
				this.props.completeTodo(payload.id);
				break;
			default:
		}
	};
	createTodo = task => {
		this.props.addTodo(task);
	};
	deleteTodo = id => {
		this.props.deleteTodo(id);
	};

	completeTodo = id => {
		this.props.completeTodo(id);
	};
	render() {
		const { todoList = [] } = this.props.todoData;
		return (
			<div className="container">
				<h3>Create a TODO</h3>
				<TodoForm
					count={todoList.length}
					handleTodoAction={this.handleTodoAction}
				/>
				{todoList.length ? (
					<TodoList
						todoList={todoList}
						handleTodoAction={this.handleTodoAction}
					/>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		todoData: state.todoData
	};
};

const mapDispatchToProps = (dispatch) => ({
	getTodos: () => dispatch(getTodos()),
	addTodo: (task) => dispatch(addTodo(task)),
	deleteTodo: (id) => dispatch(deleteTodo(id)),
	completeTodo: (id) => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
