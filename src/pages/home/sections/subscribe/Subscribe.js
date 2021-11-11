import React from 'react';
import line from '../../../../assets/images/line.png';
import sarrow from '../../../../assets/images/sarrow.png';
import './subscribe.scss';

const Subscribe = () => {
    return (
        <React.Fragment>
            <div className='subscribe-fluid'>
                <div className='container'>
                    <div className='subscribe'>
                        <img src={line} alt="" />
                        <div className="title">
                            <h1>Join the Club</h1>
                            <p>By better understanding the various aspects of surfing, you will improve faster <br />
                                and have more fun in the water.</p>
                        </div>
                        <div className="form">
                            <input type="email" placeholder="Enter Your E-Mail" />
                            <button>
                                <img src={sarrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Subscribe;
