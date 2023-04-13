import React from 'react';
import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BlogPostForm.css';
const BlogPostForm = () => {
    return (
            <div class="form-floating p-3">
                <input type="text" id="catchingTitle" placeholder='Type catching attention title' className='w-100 p-2 mt-2' />

                <div className="txt-area mt-3">
                    <textarea style={{minHeight:'250px'}} placeholder='Type your question' id="details-Qs" className='area-h w-100 p-2'></textarea>
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
    );
};

export default BlogPostForm;