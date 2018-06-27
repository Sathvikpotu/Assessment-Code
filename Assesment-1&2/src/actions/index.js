export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function getTodos() {
	return {
		type: "GET_TODOS"
	};
}
export function addTodo(task) {
	return {
		type: CREATE_TODO,
		task
	};
}

export function deleteTodo(taskId) {
	return {
		type: DELETE_TODO,
		taskId
	};
}

export function completeTodo(taskId) {
	return {
		type: COMPLETE_TODO,
		taskId
	};
}

export function updateTodo(taskId) {
	return {
		type: UPDATE_TODO,
		taskId
	};
}
