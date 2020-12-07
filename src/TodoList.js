import React, { Component } from 'react';
class TodoList extends Component {

	render() {
		return (
			<ol>
				{
					<li key={this.props.items.productId}>
						Product: {this.props.items.product} |  Brand: {this.props.items.brand}
					</li>
				}
			</ol>
		);
	}
}
export default TodoList;