export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export function getTodos() {
	return {
		type: GET_TODOS
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
