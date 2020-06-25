import React, { Component } from 'react';
import pdfFile from '../files/stephanie_zou_resume_2020.pdf'


export default class ResumeContainer extends Component {

    onResumeClick() {
        window.open(pdfFile);
    }

    render() {
    return (
        <div className="Example">
            <a onClick={this.onResumeClick} > my resume </a>
        </div>
    );
}
}