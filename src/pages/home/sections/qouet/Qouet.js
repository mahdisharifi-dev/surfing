import React from 'react';
import line from '../../../../assets/images/line.png';
import img from '../../../../assets/images/img7.png';
import img2 from '../../../../assets/images/img5.png';
import Button from '../../../../components/button/Button';
import "./qouet.scss";

const Qouet = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="qouet">
                    <h3>Surfing is the most blissful experience you can have  on this planet, a taste of heaven.</h3>
                    <small>John McCarthy</small>
                    <img src={line} alt="" />
                </div>
                <div className="video">
                    <div className='video-wrapper'>
                        <div className="image-column">
                            <img src={img2} alt="" />
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste adipisci commodi voluptas amet asperiores distinctio aspernatur dolorem</p>
                                <Button title='Read More' />
                            </div>
                        </div>

                        <div className="video-column">
                            <img src={img} alt="" className='img-2' />
                        </div>
                    </div>
                    <div className="mobile-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste adipisci commodi voluptas amet asperiores distinctio aspernatur dolorem</p>
                        <Button title='Read More ' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Qouet;