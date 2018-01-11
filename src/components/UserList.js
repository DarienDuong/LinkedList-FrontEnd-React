import React, {Component} from 'react'
import {Row, Grid} from 'react-bootstrap'
import axios from 'axios'

class UserList extends Component {
	constructor(props){
		super(props)
		this.state={
			users: []
		}
	}

	componentDidMount() {
		console.log('in the did mount')
		axios
		  .get(`http://localhost:3000/api/users`)
		  .then(response => {
		    const newUsers = response.data.data.map(user => ({
		    	firstName: user.firstName,
		    	lastName: user.lastName 
		    }))
		    console.log('we in thisss')
		    this.setState({users: newUsers})

		   })
	}

	render(){
		const users=this.state.users.map(user => (<h1>{user.firstName} {user.lastName}</h1>))
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