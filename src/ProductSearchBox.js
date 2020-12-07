import React, { Component } from 'react';
import './App.css';
let service1 = '/productdetails/';

class ProductSearchBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			error: false,
		}
	}
	componentDidMount() {

		fetch(service1, {
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
	render() {

		return (
			<form action="page.jps" method="post">
				<label>
					Enter Product ID :
				<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}

}
export default ProductSearchBox;