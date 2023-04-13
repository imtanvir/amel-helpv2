import React from 'react';
import './LeftNavBar.css';
import { faAddressCard, faBookOpenReader, faBullhorn, faFolderClosed, faHome, faLifeRing, faSearch, faTag, faTrophy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import github from './../../../images/social/github.png';
import facebook from './../../../images/social/facebook.png';
import instagram from './../../../images/social/instagram.png';
import { Link } from 'react-router-dom';
const LeftNavBar = () => {
    const currentPage = window.location.pathname;
    return (
        <div id='leftSideNavBar' className="left-menu-section d-flex flex-column justify-content-between" style={{ visibility: window.innerWidth <= 991 ? 'hidden' : 'visible', top: '0%'}}>
            <div className="menu-section">
            <ul className='menu-items list-group'>
                <h3 className='ps-4' style={{color:'#808080', fontSize:'16px'}}><FontAwesomeIcon icon={faHome}/> Menu</h3>
                <a href="/" className='text-decoration-none text-dark'><li className='menu-item active'><FontAwesomeIcon icon={faAddressCard} className='pe-2' /> User Profile</li></a>
                <a href="/" className='text-decoration-none text-dark'><li className='menu-item'><FontAwesomeIcon icon={faFolderClosed} className='pe-2' /> Communities</li></a>
                <a className='text-decoration-none text-dark btn collapsed ps-0 pt-0 actv-b-0' type="button" data-bs-toggle="collapse" data-bs-target="#qs-option" aria-expanded="false" aria-controls="qs-option"><li className='menu-item qs-li-pl'><FontAwesomeIcon  icon={faBookOpenReader} className='pe-2' />Questions</li></a>
                <div class="collapse" id="qs-option">
                    <div class="card card-body">
                        <ul className='qs-category'>
                            <li><Link className='text-decoration-none text-dark' to={'/dashboard'}>New Question</Link></li>
                            <li><Link className='text-decoration-none text-dark' to={'/dashboard'}>Recent Question</Link></li>
                            <li><Link className='text-decoration-none text-dark' to={'/dashboard'}>Popular Question</Link></li>
                            <li><Link className='text-decoration-none text-dark' to={'/dashboard'}>Hot Question</Link></li>
                        </ul>
                    </div>
                </div>
            </ul>
            <ul className='menu-items list-group'>
                <Link to={'/post-view'} className='text-decoration-none text-dark'><li className='menu-item'><FontAwesomeIcon icon={faBullhorn} className='pe-2' /> Polls</li></Link>
                <a href="/" className='text-decoration-none text-dark'><li className='menu-item'><FontAwesomeIcon icon={faTag} className='pe-2 fa-flip-horizontal tag-icon-left' /> Tags</li></a>
                <a href="/" className='text-decoration-none text-dark'><li className='menu-item'><FontAwesomeIcon  icon={faTrophy} className='pe-2' /> Badges</li></a>
                <a href="/" className='text-decoration-none text-dark'><li className='menu-item'><FontAwesomeIcon  icon={faUserGroup} className='pe-2' /> Users</li></a>
                <a href="/" className='text-decoration-none text-dark'><li className='menu-item'><FontAwesomeIcon  icon={faLifeRing} className='pe-2' /> Help</li></a>
                
            </ul>
            </div>
            <div className="btm-icon-section d-flex justify-content-center pb-3">
                <a href="https://github.com/" className='tex-decoration-none pe-3'><span><img src={github} alt="git" /></span></a>
                <a href="https://www.facebook.com/" className='tex-decoration-none pe-3'><span><img src={facebook} alt="fb" /></span></a>
                <a href="https://www.instagram.com/" className='tex-decoration-none pe-3'><span><img src={instagram} alt="insta" /></span></a>
            </div>    
        </div>
    );
};

export default LeftNavBar;