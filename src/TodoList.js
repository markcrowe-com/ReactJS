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
		return (
				<ul>
					{this.props.items.map(item => (
												<li key = {item.productId}>
													<h2>Product: {item.product} |  Brand: {item.brand} </h2>
												</li>
										))}
				</ul>
				);
	}
}
;


export default TodoList;