import React from 'react';
import line from '../../../../assets/images/vline.png';
import Button from '../../../../components/button/Button';
import service1 from '../../../../assets/images/service1.png';
import service2 from '../../../../assets/images/service2.png';
import './services.scss';

const Services = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className="services">
                    <div className="service service-1">
                        <div className="information1">
                            <span>Surf Camps</span>
                        </div>
                        <div className="content">
                            <h1>Surf Training</h1>
                            <img src={line} alt="" />
                            <p>By better understanding the various aspects of surfing, <br /> By better understanding the various aspects of surfing, <br /> you will improve faster and have more fun in the water.</p>
                            <Button title='Read More' />
                        </div>
                        <img src={service1} alt="" />
                    </div>
                    <div className="service service-2">
                        <div className="information2">
                            <span>Surf Camps</span>
                        </div>
                        <img src={service2} alt="" />
                        <div className="content">
                            <h1>Surf Training</h1>
                            <img src={line} alt="" />
                            <p>By better understanding the various aspects of surfing, <br /> By better understanding the various aspects of surfing, <br /> you will improve faster and have more fun in the water.</p>
                            <Button title='Read More' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services;
