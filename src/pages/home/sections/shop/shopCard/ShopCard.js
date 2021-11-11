import React from 'react';
import cover from '../../../../../assets/images/board.png';
import Button from '../../../../../components/button/Button';

const ShopCard = () => {
    return (
        <React.Fragment>
            <div className="product-card">
                <div className="cover">
                    <img src={cover} alt="" />
                </div>
                <div className="content">
                    <div className="name">
                        <small>Surfboards</small>
                        <h3>Emery NEM XF</h3>
                    </div>
                    <div className="buy">
                        <span>$960</span>
                        <Button title="Buy" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShopCard;
