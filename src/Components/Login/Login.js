import React from 'react';
import './Login.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
        const hideOnClick = (dHeader) => {
        const element = document.getElementById(dHeader);
        if (element) {
            element.style.display = 'none';
        }
      };
    return (
        <div>
            <Header></Header>
            {/* Login section  */}
            <div className="login-area d-flex justify-center pt-lin">
                <Container className='d-flex justify-content-center'>    
                    <div className="data-submit-field text-start w-50">
                        <h1 className="field-heading">We've missed you!</h1>
                        <p className=' pe-4 mb-2'>
                        More than 150 questions are waiting for your wise suggestions!
                        </p>
                        {/* input field */}
                        <form className="pt-2">
                            <div class="mb-3">
                                <input type="text" placeholder='Username' className="form-control shadow-sm" id="username" required/>
                            </div>
                            <div className="mb-3">
                                <input type="password" placeholder='Password' className="form-control shadow-sm" id="userPass" required/>
                            </div>
                            <div className="form-check" style={{marginBottom: '3rem'}}>
                                <input className="form-check-input check-w" type="checkbox" id="remember-pass" />
                                <label className="form-check-label" for="remember-pass">Remember me</label>
                                <Link className='text-decoration-none d-block' to={'/'}>Forgot password</Link>
                            </div>
                            <Link className='text-decoration-none text-white' to={'/dashboard'}><button onClick={hideOnClick} type="submit" className="btn btn-bg text-white">Sign In</button></Link>
                            <span className='px-3'>Or</span>
                            <Link className='text-decoration-none' to={'/register'}>Register now!</Link>
                            <div class="invalid-feedback">Wrong password!</div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Login;