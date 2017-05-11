import React, { Component } from 'react';
import {IndexLink} from 'react-router';
class IndexHead extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<IndexLink to='/'>
			<div className='indexHead'>
				豆瓣电影Top
			</div>
			</IndexLink>
		)
	}
}
export default IndexHead;