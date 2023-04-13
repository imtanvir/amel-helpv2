import { faLink, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UserProfile from '../UserProfile/UserProfile';

const TopLink = () => {
    return (
        <div className="top-link-section  ps-2 py-2">
            <UserProfile></UserProfile>
        </div>
    );
};

export default TopLink;