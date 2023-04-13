import { faArrowUpRightFromSquare, faCircleCheck, faClock, faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';

const CategoryTag = () => {
    return (
    <Nav className='align-items-center py-2' variant="pills" defaultActiveKey="/home">
        <Nav.Item className='new'>
            <Nav.Link href="/home">
            <FontAwesomeIcon icon={faClock} className='pe-2' />New</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="top">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Top</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="hot" ><FontAwesomeIcon icon={faFire} /> Hot</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="closed" ><FontAwesomeIcon icon={faCircleCheck} /> Closed</Nav.Link>
        </Nav.Item>
    </Nav>
    );
};

export default CategoryTag;