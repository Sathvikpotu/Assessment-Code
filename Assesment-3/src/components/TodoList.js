import React from "react";
import Item from "./Item";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const TodoList = ({ todoList, handleTodoAction }) => (
	<div className="todo-list">
		<Card style={{ background: "#f8f8f8" }}>
			<CardContent>
				<div className="list-wrapper">
					{todoList.map(todo => (
						<Item key={todo.id} handleTodoAction={handleTodoAction} {...todo} />
					))}
				</div>
			</CardContent>
		</Card>
	</div>
);

export default TodoList;
