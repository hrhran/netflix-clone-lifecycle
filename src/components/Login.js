import { Component, createRef } from 'react'
import {ReactComponent as Logo} from '../media/logo.svg';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/authActions' 
import { Navigate } from 'react-router-dom';
import ChatBox from './ChatBox/ChatBox';

class Login extends Component {

  constructor(props) {
    super(props)
    this.emailRef = createRef()
    this.passwordRef = createRef()
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
    const username = this.emailRef.current.value
    const password = this.passwordRef.current.value
    if(username==='test' && password==='test'){
      // console.log("SUCCESS")
      // console.log(this.props)
      this.props.loginAction()
      return <Navigate to='/' /> 
    }else{
      console.log("wrong")
    }
  }

  render(){
    //console.log(this.props)
    if(this.props.auth)
      return <Navigate to='/' /> 
    return (
      <>
      {console.log("Login Rendered")}
      <div className='login-page'>
          <div className='logo'><Logo /></div>
          <div className='form-space'>
            <div className='form-container'>
              <div className='form-title'>
                Sign In
              </div>
              <form>
                <div className='form-group'>
                  <div className='input-text'>
                    <input ref={this.emailRef} type='text' name='em25' placeholder='Email or phone number' />
                  </div>
                    <div className='input-text'>
                    <input ref={this.passwordRef} type='password' name='pw25'  placeholder='Password' autoComplete="on"/>
                  </div>
                </div>
                <button className='form-submit' onClick={this.handleSubmit}>Sign In</button>
                <div className='form-items'>
                  <div className='remember-me'>
                    <input type='checkbox' name="remember" /> 
                    Remember me
                  </div>
                  <div className='help-me'>
                    Need help?
                  </div>
                </div>
              </form>
              <div className='register-now'>
                New to Netflix? <span className='register'>Sign up now</span>
              </div>
              <div className='below-text'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='learn-more'>Learn more.</span>
              </div>
            </div>
          </div>
          <ChatBox/>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { auth: state.auth };
};

export default connect(mapStateToProps, { loginAction })(Login)