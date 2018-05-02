import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyForm extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: props.inputValue }
	}
	handleChange = event => {
		console.log('MyForm: handleChange');
		this.setState({ inputValue: event.target.value });
	}
	render() {
		//if( true )
		//	this.setState({something: true});
		return (
			<div>
				<input type="text" value={this.state.inputValue} onChange={this.handleChange} />
			</div>
		)
	}
}
MyForm.propTypes = {
	inputValue: PropTypes.string.isRequired,
	extra: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]).isRequired
}
MyForm.defaultProps = {
	inputValue: 'hermelin'
}

export default MyForm;
