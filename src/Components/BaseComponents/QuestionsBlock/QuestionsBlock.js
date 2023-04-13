import React from 'react';
import './QuestionsBlock.css';
import {faEllipsisVertical, faEye, faMessage, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import profile1 from './../../../images/qsPage/Ava.png';
import profile2 from './../../../images/qsPage/aizan.png';
import profile3 from './../../../images/qsPage/linuxoid.png';
import profile4 from './../../../images/qsPage/lola.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, FloatingLabel, Form } from 'react-bootstrap';
import BlogPostForm from '../Blog/BlogPostForm/BlogPostForm';
import { Link } from 'react-router-dom';
const QuestionsBlock = () => {
    function removeClassOnClick(id) {
        const docElem = document.getElementById(id);
        docElem.classList.remove("show");
      }
    return (
        <div className="middle-question-block">
        <div className="w-100">
            <div className="collapse" id="collapseExample2">
                <div className="card card-body">
                        <Container>
                            <BlogPostForm></BlogPostForm>
                        </Container>
                    </div>
                </div>
            </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <img src={profile1} alt="user image" />
                    <div className="user-details d-flex flex-column ps-2">
                        <span><Link className='text-decoration-none' to={'/user-profile'}>@username</Link></span>
                        <span>25 min ago</span>
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
                    <button className="collapsed me-2 btn btn-dark" data-bs-toggle="collapse" data-bs-target="#qsOption1" aria-expanded="false" aria-controls="qsOption1">Answer</button>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />155</span>
                </div>
            </div>
            <div class="collapse mt-2" id="qsOption1">
                    <div class="card card-body">
                        <FloatingLabel className='mb-2' controlId="answer-title" label="Type tile">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '50px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="answer-box" label="Type your answer">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="answer-action-btn d-flex flex-row justify-content-end mt-2">
                            <button onClick={()=>{removeClassOnClick('qsOption1')}} type='submit' className='btn btn-secondary w-25 me-2'>Close</button>
                            <button type='submit' className='btn btn-secondary w-25'>Submit</button>
                        </div>
                    </div>
            </div>   
        </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <img src={profile2} alt="user image" />
                    <div className="user-details d-flex flex-column ps-2">
                        <span><Link className='text-decoration-none' to={'/user-profile'}>@username</Link></span>
                        <span>25 min ago</span>
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
                    <button className="collapsed me-2 btn btn-dark" data-bs-toggle="collapse" data-bs-target="#qsOption2" aria-expanded="false" aria-controls="qsOption2">Answer</button>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />155</span>
                </div>
            </div>
            <div class="collapse mt-2" id="qsOption2">
                    <div class="card card-body">
                        <FloatingLabel className='mb-2' controlId="answer-title" label="Type tile">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '50px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="answer-box" label="Type your answer">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="answer-action-btn d-flex flex-row justify-content-end mt-2">
                            <button onClick={()=>{removeClassOnClick('qsOption2')}} type='submit' className='btn btn-secondary w-25 me-2'>Close</button>
                            <button type='submit' className='btn btn-secondary w-25'>Submit</button>
                        </div>
                    </div>
            </div>   
        </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <img src={profile3} alt="user image" />
                    <div className="user-details d-flex flex-column ps-2">
                        <span><Link className='text-decoration-none' to={'/user-profile'}>@username</Link></span>
                        <span>25 min ago</span>
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
                    <button className="collapsed me-2 btn btn-dark" data-bs-toggle="collapse" data-bs-target="#qsOption3" aria-expanded="false" aria-controls="qsOption3">Answer</button>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />155</span>
                </div>
            </div>
            <div class="collapse mt-2" id="qsOption3">
                    <div class="card card-body">
                        <FloatingLabel className='mb-2' controlId="answer-title" label="Type tile">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '50px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="answer-box" label="Type your answer">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="answer-action-btn d-flex flex-row justify-content-end mt-2">
                            <button onClick={()=>{removeClassOnClick('qsOption3')}} type='submit' className='btn btn-secondary w-25 me-2'>Close</button>
                            <button type='submit' className='btn btn-secondary w-25'>Submit</button>
                        </div>
                    </div>
                </div>    
        </div>
        <div className="question-block shadow-sm mb-3">
            <div className="d-flex justify-content-between">
                <div className="qs-user d-flex flex-row">
                    <img src={profile4} alt="user image" />
                    <div className="user-details d-flex flex-column ps-2">
                        <span><Link className='text-decoration-none' to={'/user-profile'}>@username</Link></span>
                        <span>25 min ago</span>
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
                    <button className="collapsed me-2 btn btn-dark" data-bs-toggle="collapse" data-bs-target="#qsOption4" aria-expanded="false" aria-controls="qsOption4">Answer</button>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faEye} />125</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faMessage} />55</span>
                    <span className='pe-3'><FontAwesomeIcon className='pe-1' icon={faArrowUp} />155</span>
                </div>
            </div>
            <div class="collapse mt-2" id="qsOption4">
                    <div class="card card-body">
                        <FloatingLabel className='mb-2' controlId="answer-title" label="Type tile">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '50px' }}
                            />
                        </FloatingLabel>
                        <FloatingLabel controlId="answer-box" label="Type your answer">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="answer-action-btn d-flex flex-row justify-content-end mt-2">
                            <button onClick={()=>{removeClassOnClick('qsOption4')}} type='submit' className='btn btn-secondary w-25 me-2'>Close</button>
                            <button type='submit' className='btn btn-secondary w-25'>Submit</button>
                        </div>
                    </div>
                </div>    
        </div>
    </div>
    );
};

export default QuestionsBlock;