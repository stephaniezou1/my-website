import React from 'react';
import Pdf from '../files/stephanie_zou_resume_2020.pdf'

const Resume = () => {

    const onResumeClick = () => {
        window.open(Pdf);
    }

    return(
        <div>
            <a onClick={onResumeClick}>
                Resume
            </a>
        </div>
)}

export default Resume;