import React, { useRef } from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import ShopCard from './shopCard/ShopCard';
import Button from '../../../../components/button/Button';
import bg from '../../../../assets/images/shopbg.png';
import AL from '../../../../assets/images/la.png';
import AR from '../../../../assets/images/ra.png';
import "./shop.scss";

const Shop = () => {
    SwiperCore.use([EffectFade, Navigation, Pagination]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <React.Fragment>
            <div className="shop-fluid" style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'bottom', backgroundSize: 'cover', backgroundAttachment: 'scroll', paddingTop: '50px' }}>
                <i className="slider-btn-prev slider-btn" ref={prevRef}>
                    <img src={AL} alt="" />
                </i>
                <i className="slider-btn-next slider-btn" ref={nextRef}>
                    <img src={AR} alt="" />
                </i>
                <div className="container">
                    <div className="shop">
                        <div className="title">
                            <small>Shop</small>
                            <h1>Surfboards</h1>
                        </div>
                        <div className="products">
                            <Swiper slidesPerView={3} spaceBetween={30} onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }} breakpoints={{
                                "0": {
                                    "slidesPerView": 1,
                                },
                                "768": {
                                    "slidesPerView": 2,
                                },
                                "1024": {
                                    "slidesPerView": 3,
                                }
                            }}>
                                {
                                    Array.from(Array(6).keys()).map((item, i) => <SwiperSlide>
                                        <ShopCard key={i} />
                                    </SwiperSlide>)
                                }
                            </Swiper>
                            <Button title='Show All' />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Shop;