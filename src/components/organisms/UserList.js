import React, {Component} from 'react'
import {Row, Grid} from 'react-bootstrap'

class UserList extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.fetchUsers()
	}

	render(){
		const users=this.props.users.map(user => (<h1>{user.firstName} {user.lastName}</h1>))
		return (
			<Grid>
				<Row>
					{this.props.loading ? (<h1>Loading</h1>) : (users)}
				</Row>
			</Grid>
		) 	
	}
}

export default UserList