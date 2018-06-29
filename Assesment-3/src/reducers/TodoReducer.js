import { 
	GET_TODOS_SUCCESS, CREATE_TODO_SUCCESS, DELETE_TODO_SUCCESS, COMPLETE_TODO_SUCCESS
} from "../actions";

const initialState = {
	todoList: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS_SUCCESS:
			return Object.assign(
				{},
				{ todoList: [...action.payload.task || []] }
			);
		case CREATE_TODO_SUCCESS:
			return Object.assign(
				{},
				{ todoList: [...action.payload.task] }
			);
		case DELETE_TODO_SUCCESS:
			return Object.assign(
				{},
				{
					todoList:
						state.todoList.filter(todo => todo.id !== action.taskId) || []
				}
			);
		case COMPLETE_TODO_SUCCESS:
			const todos = state.todoList.map(todo => {
				if (todo.id === action.taskId) {
					todo.completed = true;
				}
				return todo;
			});
			return Object.assign({}, { todoList: todos });
		default:
			return state;
	}
};
