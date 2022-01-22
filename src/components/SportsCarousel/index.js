import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';

// images
import sports2 from '../../assets/img/sports/sports2.jpg';
import sports3 from '../../assets/img/sports/sports3.jpg';
import sports4 from '../../assets/img/sports/sports4.jpg';
import sports5 from '../../assets/img/sports/sports5.jpg';
import sports6 from '../../assets/img/sports/sports6.jpg';

import blog_small1 from '../../assets/img/blog/blog_small1.jpg';
import blog_small2 from '../../assets/img/blog/blog_small2.jpg';
import blog_small3 from '../../assets/img/blog/blog_small3.jpg';
import blog_small4 from '../../assets/img/blog/blog_small4.jpg';
import blog_small5 from '../../assets/img/blog/blog_small5.jpg';

import {mostViewSort} from "../../utils/commonFunctions";

const mostView = [
    {
        image: sports2,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: sports3,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: sports4,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: sports5,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: sports6,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: blog_small1,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: blog_small2,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular'
    },
    {
        image: blog_small3,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: blog_small4,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
    {
        image: blog_small5,
        category: 'DEPORTES',
        date: 'March 26, 2020',
        title: 'Siete beneficios de la actividad fisica regular',
    },
];

const SportsCarousel = ({dark}) => {
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
        <div className="widget tab_widgets">
            <div className="post_type2_carousel multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper getSwiper={setSwiper} {...params}>
                    {mostViewSort(mostView).map((item, i) => (
                        <div key={i} className="single_post2_carousel">
                            <div className="single_post widgets_small">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <Link to="/"><img src={item.image} alt="thumb"/></Link>
                                    </div>
                                    <span className="tranding"><FontAwesome name="bolt"/></span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2"><Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                    <h4><Link to="/post1">{item.title}</Link></h4>
                                </div>
                            </div>
                            <div className="space-15"/>
                            {dark ? <div className="border_white"/> : <div className="border_black"/>}
                            <div className="space-15"/>
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
            </div>
        </div>
    );
};

export default SportsCarousel;