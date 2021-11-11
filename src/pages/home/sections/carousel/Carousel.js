import React, { useRef, useState } from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import img from '../../../../assets/images/img2.jpg';
import img2 from '../../../../assets/images/img.jpg';
import LA from '../../../../assets/images/la.png';
import RA from '../../../../assets/images/ra.png';
import s1 from '../../../../assets/images/tumblr.png'
import s2 from '../../../../assets/images/twitter.png'
import s3 from '../../../../assets/images/vimeo.png'
import './carousel.scss';

const Carousel = () => {
    SwiperCore.use([EffectFade, Navigation, Pagination]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [total, setTotal] = useState(2);
    const [active, setActive] = useState(1);
    const handlePrevActive = () => {
        if (active <= total && active != 1) {
            setActive(active - 1);
        }
    }
    const handleNextActive = () => {
        if (active < total && active != total) {
            setActive(active + 1);
        }
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="carousel">
                    <div className="informations">
                        <div>
                            <img src={s1} alt="" />
                            <img src={s2} alt="" />
                            <img src={s3} alt="" />
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="content">
                            <small>Your</small>
                            <h1>Beautiful Escape</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa ut possimus facere quam soluta mollitia impedit repellendus aut quasi, sint voluptatum neque, harum porro eos dolores officia sapiente modi!</p>
                        </div>
                        <div className="controls">
                            <img src={LA} alt="" ref={prevRef} onClick={handlePrevActive} />
                            <span>{active} / {total}</span>
                            <img src={RA} alt="" ref={nextRef} onClick={handleNextActive} />
                        </div>
                    </div>
                    <div className="images-column">
                        <Swiper simulateTouch={false} onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}>
                            <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Carousel;
