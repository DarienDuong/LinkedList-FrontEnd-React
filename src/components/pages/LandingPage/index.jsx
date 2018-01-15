import React from 'react';
import styled from 'styled-components';

const Landing = styled.section `
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  background: white;
  padding: 0 2em;
  box-sizing: border-box;
`
const LandingLogo = styled.h1 `
  font-size: 4.5rem;
  font-weight: 100;
  text-align: center;
  color: #004471;
  margin-bottom: 1.5rem;
`
const H1span = styled.span `
  font-weight: 500;
`
const IntroText = styled.p `
  font-size: 1.625rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 1.5rem;

`
const InputGroup = styled.div `
  position:relative; 
  margin-bottom:1.5rem;
`

const Input = styled.input `
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width: 100%;
  border:none;
  border-bottom:1px solid #F5F5F5;
  outline: 0;
  ransition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;

  :focus {
    outline: 2px solid black;
  }
  :focus ~ label {
    top:-20px;
    font-size:14px;
  }
`
const Label = styled.label `
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  `
const Button = styled.input.attrs({
  type: 'submit'
})`
  width: 100%;
  padding: 1rem;;
  font-size: 1.25rem;
  font-weight: 100;
  color: #ffffff;
  background: #004471;
  border: none;
  border-radius: 40px;
`
const FormBlurb = styled.p `
  margin-top: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: #7E8082;
`
const RememberMe = styled.div `
  margin-bottom: 1rem;
  margin-top: -1.25rem;
  
  p {
    display: inline-block;
    font-size: .875rem;
    font-weight: 100;
    color: #414346;
  }
`
const SignUpSpan = styled.span `
  font-weight: 500;
  color: #004471;
`
const LandingPage = () => {
  return (
    <Landing >
      <div>
      <LandingLogo>linked<H1span>list</H1span></LandingLogo>
      <IntroText>Welcome to LinkedList, where you can totally like, land a sweet developer job or whatever.</IntroText>
      <div>
        <form>
          <InputGroup>
            <Input type="text" name="username" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <Label htmlFor="username">Username</Label>
          </InputGroup>

          <InputGroup>
            <Input type="password" name="password" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <Label htmlFor="password">Password</Label>
          </InputGroup>

          <RememberMe>
            <input type="checkbox"/>
            <p>Remember Me</p>
          </RememberMe>
          <Button type="submit" value="Sign In"/>
          <FormBlurb>Need an account? <SignUpSpan>Sign Up</SignUpSpan></FormBlurb>
        </form>
      </div>
      </div>
    </Landing>
  )
}

export default LandingPage