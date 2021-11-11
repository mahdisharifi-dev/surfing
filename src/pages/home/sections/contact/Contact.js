import React from 'react';
import contact from "../../../../assets/images/contact.png"
import Button from '../../../../components/button/Button';
import './contact.scss';

const Contact = () => {
    return (
        <React.Fragment>
            <div className='contact'>
                <img src={contact} alt="" />
                <div className="content">
                    <span className='title'>Our Camp</span>
                    <h3>CA 91932, USA <br /> Imperial Beach <br /> 560 Silver Strand Blvd </h3>
                    <Button title="Get in touch" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;
