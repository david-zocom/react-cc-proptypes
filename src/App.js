import React, { Component } from 'react';
import MyForm from './MyForm.js';
import './App.css';

class App extends Component {
	render() {
		let mystery = 'string!';
		return (
			<div>
				<MyForm extra={true} />
				<MyForm extra={false} inputValue="åsna"/>
				<MyForm extra={''} inputValue={mystery} />
			</div>
		);
	}
}

export default App;
