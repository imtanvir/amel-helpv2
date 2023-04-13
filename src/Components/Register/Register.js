import React from 'react';
import Header from '../Header/Header';
import './Register.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Header></Header>
            {/* Register section  */}
            <div className="register-area pt-sectn">
                <Container className='d-flex justify-content-center'>    
                    <div className="data-submit-field text-start w-50">
                        <h1 className="field-heading">Join Alem community</h1>
                        <p className='text-secondary d-inline pe-4 mb-2'>
                        Get more features and priviliges by joining to the most helpful community
                        </p>
                        {/* input field */}
                        <form className="py-2">
                            <div class="mb-3">
                                <input type="text" placeholder='Name' className="form-control shadow-sm" id="username" required/>
                            </div>
                            <div class="mb-3">
                                <input type="email" placeholder='Email' className="form-control shadow-sm" id="useremail" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="invalid-feedback">Email already registered!</div>
                            <div className="mb-3">
                                <input type="password" placeholder='Password' className="form-control shadow-sm" id="userPass" required/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Select Mejor' className="form-control shadow-sm" id="mejors" required/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='University' className="form-control shadow-sm" id="university" required/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Country' className="form-control shadow-sm" id="country" required/>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="male" />
                                <label class="form-check-label" for="male">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="female" />
                                <label class="form-check-label" for="female">Female</label>
                            </div>
                            <div class="form-check form-check-inline pb-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="notsay" />
                                <label class="form-check-label" for="notsay">Prefer not to say</label>
                            </div>
                            
                            <Link className='text-decoration-none d-block text-white' to={'/'}><button type="submit" className="btn btn-bg mb-4 text-white">Register</button></Link>
                            <span className='px-3'>Or</span>
                            <Link className='text-decoration-none' to={'/'}>Sign in now!</Link>
                        </form>
                    </div>
                </Container>
            </div>            
        </div>
    );
};

export default Register;