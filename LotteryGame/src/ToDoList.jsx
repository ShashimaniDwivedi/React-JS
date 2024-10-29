import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
	let [todos, setTodos] = useState([
		{ task: 'Sample Task', id: uuidv4(), done: false },
	]);
	let [newTodo, setNewToDo] = useState('');

	let addNewTask = () => {
		setTodos([...todos, { task: newTodo, id: uuidv4(), done: false }]);
		setNewToDo('');
	};

	let markAsDone = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		);
	};

	let markAllAsDone = () => {
		setTodos(todos.map((todo) => ({ ...todo, done: true })));
	};

	let deleteTask = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	let updateToDoValue = (event) => {
		setNewToDo(event.target.value);
	};

	return (
		<div>
			<input
				placeholder="Add a Task"
				value={newTodo}
				onChange={updateToDoValue}
			/>
			<br />
			<br />
			<button onClick={addNewTask}>Add a Task</button>
			&nbsp;
			<button onClick={markAllAsDone}>Mark All as Done</button>
			<br />
			<br />
			<hr />
			<h3>Tasks Todo</h3>
			<ul>
				{todos.map((todo) => (
					<li
						key={todo.id}
						style={{
							textDecoration: todo.done ? 'line-through' : 'none',
						}}
					>
						{todo.task}
						&nbsp;
						<button onClick={() => markAsDone(todo.id)}>
							{todo.done ? 'Undo' : 'Done'}
						</button>
						&nbsp;
						<button onClick={() => deleteTask(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}
