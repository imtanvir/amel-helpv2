import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../../Header/DashboardHeader/DashboardHeader';
import leftSideNav from '../../Utilities/Utilities';
import CategoryTag from '../CategoryTag/CategoryTag';
import ResponsiveTopLink from '../TopLink/ResponsiveTopLink/ResponsiveTopLink';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import QuestionsBlock from '../QuestionsBlock/QuestionsBlock';
import TopLink from '../TopLink/TopLink';
const Dashboard = () => {
    return (
            <div>
                <DashboardHeader></DashboardHeader>
                <Container fluid>
                    <div className="ouestion-answer-section">
                        <ResponsiveTopLink></ResponsiveTopLink>
                        <div className="hero-section-content d-flex rsp-SideP position-relative">
                            <LeftNavBar></LeftNavBar>
                            <QuestionsBlock></QuestionsBlock>
                            <div className="resp-condition">
                                <TopLink></TopLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>  
    );
};

export default Dashboard;