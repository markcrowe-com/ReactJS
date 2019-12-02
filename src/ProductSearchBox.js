/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, {Component} from 'react';
import './App.css';


class ProductSearchBox extends Component
{
	render()
	{
		<form>
			<label>
				Name:
				<input type="text" name="name" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	}
}

export default ProductSearchBox;
