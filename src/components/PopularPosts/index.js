// Packages
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';
import {mostViewSort} from "../../utils/commonFunctions";

// Data
import {populerPOsts} from "../../common/data/popularPost"

// Styles
import './style.scss';
import FontAwesome from "../uiStyle/FontAwesome";



const PopularPosts = () => {
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
        loops: true,
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className="popular_carousel_area mb30 md-mt-30">
            <h2 className="widget-title">Publicaciones Populares</h2>
            <div className="popular_carousel pt-15 multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(populerPOsts).map((item, i) => (
                        <div key={i} className="single_post type10 widgets_small mb15">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={item.image} alt="thubm"/>
                                    </Link>
                                </div>
                                <span className="tranding tranding_border">{item.id}</span>
                            </div>
                            <div className="single_post_text">
                                <h4><Link to="/post1">{item.title}</Link></h4>
                                <div className="meta4"><Link to="/">{item.category}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
                {/*CAROUSEL END*/}
            </div>
        </div>
    );
};

export default PopularPosts;