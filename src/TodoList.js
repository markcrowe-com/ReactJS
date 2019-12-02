/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, {Component} from 'react';
import TodoApp from './TodoApp';

class TodoList extends Component
{
	
	render()
	{
		
		console.log(this);
console.log(this.props.items);

		//var {items, text} = this.state;
		//console.log(items);
		return (
				
				<ul>
					{
					<li key = {this.props.items.productId}>
					<h2>Product: {this.props.items.product} |  Brand: {this.props.items.brand} </h2>
												</li>
										}
				</ul>
				);
	}
}
;


export default TodoList;