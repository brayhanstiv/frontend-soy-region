// Packages
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';

// Data
import {postSlider} from '../../common/data/postCarousel';

// Styles
import FontAwesome from "../uiStyle/FontAwesome";


const PostCarousel = ({className}) => {
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
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    };
    return (
        <div className={className ? className : ''}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="carousel_posts1 owl-carousel nav_style2 mb40 mt30">
                            {/*CAROUSEL START*/}
                            <div className="px-4 position-relative">
                                <Swiper getSwiper={setSwiper} className="trancarousel" {...params}>
                                    {postSlider.map((item, i) => (
                                        <div key={i} className="single_post widgets_small post_type5">
                                            <div className="post_img">
                                                <div className="img_wrap">
                                                    <Link to="/">
                                                        <img src={item.image} alt="slider5"/>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="single_post_text">
                                                <h4><Link to="/post1">{item.title}</Link></h4>
                                                <p>{item.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Swiper>
                                <div className="owl-nav">
                                    <div onClick={goPrev} className="owl-prev"><FontAwesome name="angle-left"/></div>
                                    <div onClick={goNext} className="owl-next"><FontAwesome name="angle-right"/></div>
                                </div>
                            </div>
                        </div>
                        {/*CAROUSEL END*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCarousel;