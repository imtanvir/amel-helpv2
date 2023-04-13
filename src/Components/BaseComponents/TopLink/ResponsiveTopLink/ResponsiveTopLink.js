import React from 'react';
import './ResponsiveTopLink.css';
import pic from '../../../../images/dahsboard-pp.jpg'
import { Container } from 'react-bootstrap';
import leftSideNav from '../../../Utilities/Utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UserProfile from '../../UserProfile/UserProfile';
const ResponsiveTopLink = () => {
    return (
        <div>
        <div className="d-none w-100 resp-top-link d-flex">
            <div className="nv-btn">
                <div className="category-section py-1 d-flex justify-content-md-between justify-content-sm-between justify-content-xsm-between">
                        <a onClick={leftSideNav} id='navBtn' style={{ fontSize: '1.4rem' }} className='btn text-decoration-none text-white ms-0-xsm ms-4 d-none d-sm-block d-block-tblt d-xsm-block d-md-none'><FontAwesomeIcon icon={faBars} /></a>
                </div>
            </div>
            <div className="resp-section w-100">
                <button className="btn text-white w-100 collapsed d-flex flex-row align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">@Golanginya <p className='profile-photo ms-2 mb-0'><img className='user-p-pic' src={pic} alt="pics" /></p></button>
            </div>
        </div>
        <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <Container>
                <UserProfile></UserProfile>
            </Container>
        </div>
    </div>
    </div>        
    );
};

export default ResponsiveTopLink;