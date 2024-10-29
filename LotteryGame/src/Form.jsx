import { useState } from 'react';
export default function Form() {
	// let [fullName, setFullName] = useState('Manas');
	// let [userName, setUserName] = useState('Manas_001');
	let [formData, setFormData] = useState({
		fullName: '',
		userName: '',
		password: '',
	});

	let handleInputChange = (event) => {
		let fieldName = event.target.name;
		let newValue = event.target.value;
		console.log(fieldName);
		//To perform changes we have to make copy
		setFormData((currData) => {
			currData[fieldName] = newValue;
			//returning whole object
			return { ...currData };
		});
		console.log(currData);
	};
	// let handleNameChange = (event) => {
	// 	setFullName(event.target.value);
	// 	console.log(event.target.value);
	// };
	// let handleUserName = (event) => {
	// 	setUserName(event.target.value);
	// 	console.log(event.target.value);
	// };

	let handleSubmit = (event) => {
		event.preventDefault();
		setFormData({
			fullName: '',
			userName: '',
			password: '',
		});
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<label htmlFor="fullName">FullName</label>
			&nbsp; &nbsp;
			<input
				id="fullName"
				type="text"
				placeholder="Enter full name"
				value={formData.fullName}
				onChange={handleInputChange}
				name="fullName"
			/>
			&nbsp; &nbsp;
			<br />
			<br />
			<br />
			<label htmlFor="userName">UserName</label>
			&nbsp; &nbsp;
			<input
				name="userName"
				//name should be same as statechange object fullName ="" see above
				id="userName"
				type="text"
				placeholder="Enter user name"
				value={formData.userName}
				onChange={handleInputChange}
			/>
			<br />
			<br />
			<label htmlFor="password">Enter password</label>
			&nbsp; &nbsp;
			<input
				name="password"
				//name should be same as statechange object fullName ="" see above
				id="password"
				type="text"
				placeholder="Enter password"
				value={formData.password}
				onChange={handleInputChange}
			/>
			&nbsp; &nbsp;
			<br />
			<br />
			<button>Submit</button>
		</form>
	);
}
