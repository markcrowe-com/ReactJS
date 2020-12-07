/* global fetch */

import React, { Component } from 'react';
import './App.css';
let serviceUrl = '/productdetails/';

let jsonHeaders = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			error: false,
		}
	}
	componentDidMount() {

		fetch(serviceUrl, {
			headers: jsonHeaders

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
	render() {
		var { isLoaded, items, error } = this.state;
		if (error) {
			return <div>Error....</div>;
		} else if (!isLoaded) {
			return <div>Loading....</div>;
		} else {
			return (
				<div className="App">
					<h1>Assignment 2 - React</h1>
					<h2>Find Top 10</h2>
					<ul>
						{items.map(this.renderProductListItem)}
					</ul>
				</div>
			);
		}
	}
	renderProductListItem(product) {
		return (
			<li key={product.productId}>Product:{product.product} | Brand:{product.brand}</li>
		);
	}
}
export default App;