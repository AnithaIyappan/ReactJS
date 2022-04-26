import { useState } from 'react';

export const Form = () => {

// registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// error checking
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handle name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handle email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handle password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handle form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Show success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Show error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please fill all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Registration Form</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs */}
		<label className="label">User Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" placeholder='Enter name' />

		<label className="label">User Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" placeholder='Enter mailid'/>

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" placeholder='Enter password'/>

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
        
	</form>
	</div>
);
}
