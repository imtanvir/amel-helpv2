import React from 'react';
import './ProfileQuestion.css';
import {faEllipsisVertical, faEye, faMessage, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import profile1 from './../../../../images/qsPage/Ava.png';
import profile2 from './../../../../images/qsPage/aizan.png';
import profile3 from './../../../../images/qsPage/linuxoid.png';
import profile4 from './../../../../images/qsPage/lola.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FloatingLabel, Form } from 'react-bootstrap';
const ProfileQuestion = () => {
    function removeClassOnClick(id) {
        const docElem = document.getElementById(id);
        docElem.classList.remove("show");
      }
    return (
        <div className="middle-question-block">
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <div className="user-details d-flex flex-column ps-2">
                        <span>@Golanginya</span>
                        <span>1 hr ago</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="qs-details d-flex flex-row align-items-center">
                <div className="vote-action-section d-flex flex-column justify-content-center me-2">
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowUp}/></button></span>
                    <span className="text-center">39</span>
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowDown}/></button></span>
                </div>
                <div className="qs-text">
                    <h1>What are the best programming languages for beginners to learn?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt amet qui alias porro. Soluta quae, repudiandae magnam placeat inventore optio culpa beatae! At eveniet obcaecati perferendis necessitatibus accusantium.</p>
                </div>
            </div>
            <div className="tag-section d-flex flex-row justify-content-between d-flex flex-row justify-evenly">
                <div className="qs-tag">
                    <a href=""><button className="btn">javascript</button></a>
                    <a href=""><button className="btn">java</button></a>
                    <a href=""><button className="btn">c#</button></a>
                </div>
                
                <div className="viewer-action d-flex align-items-center">
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />39</span>
                </div>
            </div>
        </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <div className="user-details d-flex flex-column ps-2">
                        <span>@Golanginya</span>
                        <span>2 hr ago</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="qs-details d-flex flex-row align-items-center">
                <div className="vote-action-section d-flex flex-column justify-content-center me-2">
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowUp}/></button></span>
                    <span className="text-center">39</span>
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowDown}/></button></span>
                </div>
                <div className="qs-text">
                    <h1>How can I optimize my code for performance and speed?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt amet qui alias porro. Soluta quae, repudiandae magnam placeat inventore optio culpa beatae! At eveniet obcaecati perferendis necessitatibus accusantium.</p>
                </div>
            </div>
            <div className="tag-section d-flex flex-row justify-content-between d-flex flex-row justify-evenly">
                <div className="qs-tag">
                    <a href=""><button className="btn">javascript</button></a>
                    <a href=""><button className="btn">java</button></a>
                    <a href=""><button className="btn">c#</button></a>
                </div>
                    
                <div className="viewer-action d-flex align-items-center">
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />39</span>
                </div>
            </div>
        </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <div className="user-details d-flex flex-column ps-2">
                        <span>@Golanginya</span>
                        <span>2 days ago</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="qs-details d-flex flex-row align-items-center">
                <div className="vote-action-section d-flex flex-column justify-content-center me-2">
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowUp}/></button></span>
                    <span className="text-center">39</span>
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowDown}/></button></span>
                </div>
                <div className="qs-text">
                    <h1>What are some common coding interview questions and how can I prepare for them?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt amet qui alias porro. Soluta quae, repudiandae magnam placeat inventore optio culpa beatae! At eveniet obcaecati perferendis necessitatibus accusantium.</p>
                </div>
            </div>
            <div className="tag-section d-flex flex-row justify-content-between d-flex flex-row justify-evenly">
                <div className="qs-tag">
                    <a href=""><button className="btn">javascript</button></a>
                    <a href=""><button className="btn">java</button></a>
                    <a href=""><button className="btn">c#</button></a>
                </div>
                    
                <div className="viewer-action d-flex align-items-center">
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />39</span>
                </div>
            </div>   
        </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <div className="user-details d-flex flex-column ps-2">
                        <span>@Golanginya</span>
                        <span>7 days ago</span>
                    </div>
                </div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="qs-details d-flex flex-row align-items-center">
                <div className="vote-action-section d-flex flex-column justify-content-center me-2">
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowUp}/></button></span>
                    <span className="text-center">39</span>
                    <span><button className="btn"><FontAwesomeIcon icon={faArrowDown}/></button></span>
                </div>
                <div className="qs-text">
                    <h1>What are some of the biggest challenges facing software development?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt amet qui alias porro. Soluta quae, repudiandae magnam placeat inventore optio culpa beatae! At eveniet obcaecati perferendis necessitatibus accusantium.</p>
                </div>
            </div>
            <div className="tag-section d-flex flex-row justify-content-between d-flex flex-row justify-evenly">
                <div className="qs-tag">
                    <a href=""><button className="btn">javascript</button></a>
                    <a href=""><button className="btn">java</button></a>
                    <a href=""><button className="btn">c#</button></a>
                </div>
                    
                <div className="viewer-action d-flex align-items-center">
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />39</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProfileQuestion;