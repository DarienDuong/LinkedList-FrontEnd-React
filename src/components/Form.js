import React, { Component } from 'react';
import axios from 'axios'


class Form extends Component {
  constructor(props){
  	super(props)
  	this.state = {
      username: this.props.username,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      password: this.props.password,
      error: null
  	}

    this.handleChange = this.handleChange.bind(this)
  	this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
  	this.setState({[e.target.name]: e.target.value})
  }

  addUser(){
      return axios.post(`http://localhost:3000/api/users`, {
          'firstName': this.state.username,
          'lastName': this.state.lastname,
          'userName': this.state.username,
          'password': this.state.password
        })
  }

  handleSubmit(e){
    e.preventDefault()
    this.addUser().then(() => 
      this.props.history.push('/users')
    ).catch(err => {
      console.log(err)
      this.setState({error: err})
    })
  }

  render() {
    const error = this.state
    return (
      <div>
      {this.state.error && <h1>{JSON.stringify(this.state.error)}</h1>}
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>User Name:</label>
            <input
              className='form-control'
              type='text'
              name='username'
              id='username'
              placeholder='what is your username'
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='firstname'>First Name:</label>
            <input
              className='form-control'
              type='text'
              name='firstname'
              id='firstname'
              placeholder='what is your firstname'
              onChange={this.handleChange}
              value={this.state.firstname}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastname'>Last Name:</label>
            <input
              className='form-control'
              type='text'
              name='lastname'
              id='lastname'
              placeholder='what is your lastname'
              onChange={this.handleChange}
              value={this.state.lastname}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              className='form-control'
              type='text'
              name='password'
              id='password'
              placeholder='what is your password'
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <button type = "submit" className='btn btn-primary'>Create User</button>
        </form>
      </div>
    );
  }
}


Form.defaultProps = {
  username: "",
  firstname: "",
  lastname: "",
  password: ""

}


export default Form;