import React from 'react';
import './UserProfile.css';
import Card from 'react-bootstrap/Card';
import github from './../../../images/social/github.png';
import facebook from './../../../images/social/facebook.png';
import instagram from './../../../images/social/instagram.png';
import ppic from '../../../images/dahsboard-pp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div class="form-floating p-3">
                <input type="text" id="catchingTitle" placeholder='Type catching attention title' className='w-100 p-2 mt-2' />
                <div className="txt-area mt-3">
                    <textarea style={{minHeight:'200px'}} placeholder='Type your question' id="details-Qs" className='area-h w-100 p-2'></textarea>
                    <div className="action-btn edit-sec d-flex justify-content-between">
                        <div className="img-add">
                            <button className='btn btn-primary'><FontAwesomeIcon icon={faImage}/> Add Image</button>
                        </div>
                        <div className="prosit-btns">
                            <button className='btn me-2'>Save to draft</button>
                            <button className='btn'><FontAwesomeIcon icon={faPaperPlane}/> Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }
const UserProfile = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <Button className='w-75 w-xsm p-2 fs-5' variant="primary" onClick={() => setModalShow(true)}>
            Ask a question
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="user-profile-card">
            <Card className='user-card text-center py-3'>
            <div className="card-img-ppics d-flex flex-column align-items-center text-center">
            <Card.Img className='rounded-circle d-flex justify-content-center' variant="top" src={ppic} /> 
            <Card.Title className='mb-3'><a className='text-decoration-none text-dark h6' href='/'><Link className='text-decoration-none' to={'/user-profile'}>@Golanginya</Link></a></Card.Title>           
            </div>
                <Card.Body>
                    
                    <Card.Text className='mb-3'>
                        <span className='me-2'><FontAwesomeIcon icon={faAward}/></span>
                        <span>135</span>
                        <span className='ms-2'>[8]</span>
                    </Card.Text>
                    <Card.Text>
                    <div className="btm-icon-section d-flex justify-content-center pb-3">
                        <a href="https://github.com/" className='tex-decoration-none pe-3'><span><img src={github} alt="git" /></span></a>
                        <a href="https://www.facebook.com/" className='tex-decoration-none pe-3'><span><img src={facebook} alt="fb" /></span></a>
                        <a href="https://www.instagram.com/" className='tex-decoration-none pe-3'><span><img src={instagram} alt="insta" /></span></a>
                    </div>
                    </Card.Text>
                        
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default UserProfile;