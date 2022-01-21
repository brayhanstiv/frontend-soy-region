// Packages
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';

// Styles
import FontAwesome from "../uiStyle/FontAwesome";

// Data
import {trendingNews} from "../../common/data/trendingNewsSlider";

const TrendingNewsSlider = () => {
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        }
    };
    return (
        <div className="carousel_post2_type3 nav_style1">
            <Swiper getSwiper={setSwiper} className="trancarousel" {...params}>
                {trendingNews.map((item, i) => (
                    <div key={i} className="single_post post_type3">
                        <div className="post_img">
                            <div className="img_wrap">
                                <img src={item.image} alt="thumb"/>
                            </div>
                            <span className="tranding"><FontAwesome name="fa-bolt"/></span>
                        </div>
                        <div className="single_post_text">
                            <div className="meta3"><Link to="/">{item.category}</Link>
                                <Link to="/">{item.date}</Link>
                            </div>
                            <h4><Link to="/post1">{item.title}</Link></h4>
                            <div className="space-10"/>
                            <p className="post-p">{item.body}</p>
                        </div>
                    </div>
                ))}
            </Swiper>
            <div className="navBtns">
                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
            </div>
        </div>
    );
};

export default TrendingNewsSlider;