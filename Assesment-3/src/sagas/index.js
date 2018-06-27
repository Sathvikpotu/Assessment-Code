import { takeEvery } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {
	GET_TODOS, GET_TODOS_SUCCESS,
	CREATE_TODO, DELETE_TODO, COMPLETE_TODO
} from "../actions";

const BASE_URL = "https://practiceapi.devmountain.com/api";

/* GET ALL TASK API */
function* getTasks() {
	return yield fetch(`${BASE_URL}/tasks`, {
		method: "GET"
	});
}

/* CREATE TASK API */
function* createTask(requestData) {
	return yield fetch(`${BASE_URL}/tasks`, {
		method: "POST",
		body: requestData
	});
}

/* DELETE TASK API */
function* deleteTask(id) {
	return yield fetch(`${BASE_URL}/tasks/${id}`, {
		method: "DELETE"
	});
}

/* COMPLETE TASK API */
function* completeTask(id) {
	return yield fetch(`${BASE_URL}/tasks/${id}`, {
		method: "PUT"
	});
}

function* getTodos() {
	const response = yield getTasks();
	const json = yield response.json();
	yield put({ type: GET_TODOS_SUCCESS, payload: { task: json } });
}

function* createTodo(data) {
	const response = yield createTask(data.task);
	const json = yield response.json();
	yield put({ type: GET_TODOS_SUCCESS, payload: { task: json } });
}

function* deleteTodo(data) {
	const response = yield deleteTask(data.taskId);
	const json = yield response.json();
	yield put({ type: GET_TODOS_SUCCESS, payload: { task: json } });
}

function* completeTodo(data) {
	const response = yield completeTask(data.taskId);
	const json = yield response.json();
	yield put({ type: GET_TODOS_SUCCESS, payload: { task: json } });
}

export default function* rootSaga() {
	yield takeEvery(GET_TODOS, getTodos);
	yield takeEvery(CREATE_TODO, createTodo);
	yield takeEvery(DELETE_TODO, deleteTodo);
	yield takeEvery(COMPLETE_TODO, completeTodo);
}
