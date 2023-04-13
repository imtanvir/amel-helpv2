import React from 'react';
import './ProfileViewPage.css';
import DashboardHeader from '../../Header/DashboardHeader/DashboardHeader';
import { Container } from 'react-bootstrap';
import leftSideNav from '../../Utilities/Utilities';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBars, faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import pics from '../../../images/dahsboard-pp.jpg';
import github from './../../../images/social/github.png';
import facebook from './../../../images/social/facebook.png';
import instagram from './../../../images/social/instagram.png';
import ProfileQuestion from './ProfileQuestion/ProfileQuestion';
const ProfileViewPage = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Container fluid>
            <div className="ouestion-answer-section">
                        <div className="category-section d-flex justify-content-md-between justify-content-sm-between justify-content-xsm-between">
                            <div className='navIconDiv d-flex flex-row'>
                                <a onClick={leftSideNav} id='navBtn' style={{fontSize:'1.4rem'}} className='btn text-decoration-none text-dark ms-0-xsm ms-4 d-none d-sm-block d-block-tblt d-xsm-block d-md-none'>
                                    <FontAwesomeIcon icon={faBars} />
                                </a>
                            </div>
                        </div>
                        <div className="hero-section-content d-flex rsp-SideP position-relative">
                            <LeftNavBar></LeftNavBar>
                            <div className='w-100 d-flex justify-content-center'>
                                <div className="profile-section">
                                    <Container>
                                        <div className="user-profile-post py-3 rounded d-flex flex-column justify-content-center align-items-center">
                                            <div className='w-25 text-center pb-3'>
                                            <img className='user-profile-photo w-100' src={pics} alt="user image" />
                                            </div>
                                            <h1 className='h5'>Golan Ginya</h1>
                                            <span className=''>
                                                <span className='pe-1'>124 followers .</span>
                                                <span className='ps-1'>98 followeing</span>
                                            </span>
                                            <span >@golanginya</span>
                                            <div className="user-info d-flex flex-row pb-2">
                                                <span className='px-3'>golanginya12@email.com</span>
                                                <span className='fw-bold'><FontAwesomeIcon icon={faFlagUsa}/> USA</span>
                                            </div>
                                            <div className='d-flex'>
                                                <div className="btm-archive-section d-flex justify-content-center pb-3 pe-3">
                                                    <span className='me-2'><FontAwesomeIcon icon={faAward}/></span>
                                                    <span>135</span>
                                                    <span className='ms-2'>[8]</span>
                                                </div>
                                                <div className="btm-icon-section d-flex justify-content-center">
                                                    <a href="https://github.com/" className='tex-decoration-none px-1'><span><img src={github} alt="git" /></span></a>
                                                    <a href="https://www.facebook.com/" className='tex-decoration-none px-1'><span><img src={facebook} alt="fb" /></span></a>
                                                    <a href="https://www.instagram.com/" className='tex-decoration-none px-1'><span><img src={instagram} alt="insta" /></span></a>
                                                </div>
                                            </div>
                                                
                                        </div>
                                        <ProfileQuestion></ProfileQuestion>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    );
};

export default ProfileViewPage;