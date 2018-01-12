import React, {Component} from 'react'
import {Row, Grid} from 'react-bootstrap'
import axios from 'axios'

class UserList extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.fetchUsers()
	}

	render(){
		const users=this.props.users.users.map(user => (<h1>{user.firstName} {user.lastName}</h1>))
		return (
			<Grid>
				<Row>
					{users}
				</Row>
			</Grid>
		) 	
	}
}

export default UserList