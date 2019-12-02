/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, {Component} from 'react';
import TodoList from './TodoList';
let service1 = '/entities.productdetails/';


class TodoApp extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {items: [], text: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render()
	{
		return (
				<div>
					<h3>Product Details</h3>
					<TodoList items={this.state.items} />
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="new-todo">
							Enter Product ID: 
						</label>
						<input
							id="new-todo"
							onChange={this.handleChange}
							value={this.state.text}
							/>
						<button>
							Search
						</button>
					</form>
				</div>
				);
	}

	handleChange(e)
	{
		this.setState({text: e.target.value});
	}

	handleSubmit(e)
	{
		e.preventDefault();
		if (!this.state.text.length)// if input is blank
		{
			return;
		}
		const newItem = {
			text: this.state.text,
			id: Date.now()
		};
		let url = `${service1}${newItem.text}?time=${newItem.id}`;
		let jsonHeaders = {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		};

		fetch(url, {
			headers: jsonHeaders

		})
				.then(result => result.json())
				.then(json => {
					this.setState(
							{
								items: json,
								text: 'sucess'
							}
					);
				});
	}
}


export default TodoApp;

