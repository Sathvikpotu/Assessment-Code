import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, completeTodo, getTodos } from "../actions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./App.css";

class Home extends Component {
	componentDidMount() {
		this.props.dispatch(getTodos());
	}
	handleTodoAction = action => {
		const { type, payload } = action;
		const { dispatch } = this.props;
		switch (type) {
			case "create":
				dispatch(addTodo(payload.task));
				break;
			case "delete":
				dispatch(deleteTodo(payload.id));
				break;
			case "complete":
				dispatch(completeTodo(payload.id));
				break;
			default:
		}
	};
	createTodo = task => {
		this.props.dispatch(addTodo(task));
	};
	deleteTodo = id => {
		this.props.dispatch(deleteTodo(id));
	};

	completeTodo = id => {
		this.props.dispatch(completeTodo(id));
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
	return {
		todoData: state.todoData
	};
};

export default connect(mapStateToProps)(Home);
