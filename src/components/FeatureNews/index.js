// Packages
import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {Link} from "react-router-dom";

// Components
import Heading from "../uiStyle/Heading";

// styles
import FontAwesome from "../uiStyle/FontAwesome";

// Data
import {news} from '../../common/data/featureNews'

const FeatureNews = ({className}) => {
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
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    };
    return (
        <div className={`feature_carousel_area mb40 ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Heading title="Noticias destacadas"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/*CAROUSEL START*/}
                        <div className="feature_carousel nav_style1">
                            <Swiper getSwiper={setSwiper} {...params}>
                                {news.map((item, i) => (
                                    <div key={i} className="single_post post_type6 post_type7">
                                        <div className="post_img gradient1">
                                            <Link to="/"><img src={item.image} alt="thumb"/></Link>
                                        </div>
                                        <div className="single_post_text">
                                            <div className="meta5"><Link to="/">{item.category}</Link>
                                                <Link to="/">{item.date}</Link>
                                            </div>
                                            <h4>
                                                <Link to="/post1">{item.title}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </Swiper>
                            <div className="navBtns">
                                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                            </div>
                        </div>
                        {/*CAROUSEL END*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureNews;