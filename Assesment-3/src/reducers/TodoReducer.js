import { CREATE_TODO, CREATE_TODO_SUCCESS, DELETE_TODO, COMPLETE_TODO, GET_TODOS_SUCCESS } from "../actions";

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
		default:
			return state;
	}
};
