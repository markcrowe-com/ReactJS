/* global fetch */

import React, {Component} from 'react';
import './App.css';
let service = 'https://jsonplaceholder.typicode.com/users';
let service1 = '/entities.productdetails/';
let service2 = '/entities.productdetails/findTop10';

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			error: false,
		}
	}
	componentDidMount()
	{

		fetch(service2, {
		headers: {
		'Content-Type': 'application/json',
				'Accept': 'application/json'
		}

		})
				.then(result => result.json())
				.then(json => {
				this.setState(
				{
				isLoaded: true,
						items: json,
						error: false
				}
				)
				})
				.catch(json => {
				this.setState(
				{
				isLoaded: false,
						items: json,
						error: true,
				})
				}
				);

	}

	render()
	{

		var {isLoaded, items, error} = this.state;


		if (error)
		{
			return <div>Error....</div>;
		} else if (!isLoaded)
		{
			return <div>Loading....</div>;
		} else
		{



			return (
					<div className="App">
						<h1>Assignment 2 - React</h1>
						<h2>Find Top 10</h2>
						<ul>
							{items.map(item => (
														<li key = {item.productId}>
															<h2>Product: {item.product} |  Brand: {item.brand} </h2>
														</li>
											))
							}
						</ul>
					</div>
					);
		}
	}
}




export default App;