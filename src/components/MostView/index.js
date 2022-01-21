// Packages
import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import Swiper from 'react-id-swiper';

// Styles
import FontAwesome from "../uiStyle/FontAwesome";

// Utils
import {mostViewSort} from "../../utils/commonFunctions";

// Data
import {mostView} from "../../common/data/mostView";

const MostView = ({no_margin, title, dark}) => {
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
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className={`widget tab_widgets ${no_margin ? '' : 'mb30'}`}>
            <h2 className="widget-title">{title ? title : 'Lo Más Visto'}</h2>
            <div className="post_type2_carousel multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(mostView).map((item, i) => (
                        <div key={i} className="single_post2_carousel">
                            <div className="single_post widgets_small type8">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <span className="tranding">
										<FontAwesome name="bolt"/>
									</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2"><Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                    <h4><Link to="/post1">{item.title}</Link></h4>
                                </div>
                                <div className="type8_count">
                                    <h2>{item.id}</h2>
                                </div>
                            </div>
                            {i + 2 < mostView.length ? <Fragment>
                                <div className="space-15"/>
                                {dark ? <div className="border_white"/> : <div className="border_black"/>}
                                <div className="space-15"/>
                            </Fragment> : null}
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

export default MostView;