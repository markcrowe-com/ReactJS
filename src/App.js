/* global fetch */

import React, {Component} from 'react';

let service = 'https://jsonplaceholder.typicode.com/users';
let service1 = 'http://localhost:8080/WebServices/webresources/entities.productdetails/';

class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}

	}
	componentDidMount()
	{
		fetch(service1)
				.then(result => result.json())
				.then(json => {
					this.setState(
							{
								isLoaded: true,
								items: json,
							}
					)
				});
	}

	render()
	{

		var {isLoaded, items} = this.state;

		if (!isLoaded)
		{
			return <div>Loading....</div>;
		} else
		{



			return (
					<div className="App">
						<ul>
							{items.map(item => (
														<li key = {item.id}>
															Name: {item.name} |  Email: {item.email} 
														</li>
													))
							};
						</ul>
					</div>
					);
		}
	}
}
export default App;