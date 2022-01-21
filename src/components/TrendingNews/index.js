// Packages
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

// Components
import Heading from "../uiStyle/Heading";
import TrendingNewsSlider from "../TrendingNewsSlider";

// Styles
import FontAwesome from "../uiStyle/FontAwesome";

// Data
import {trendingNews} from "../../common/data/trendingNews";

const TrendingNews = ({dark}) => {
    return (
        <Fragment>
            <Heading title="Noticias en tendencias"/>
            <TrendingNewsSlider/>
            {dark ? <div className="border_white"/> : <div className="border_black"/>}
            <div className="space-30"/>
            <div className="row">
                <div className="col-lg-6">
                    {trendingNews.slice(0, 3).map((item, i) => (
                        <Fragment key={i}>
                            <div className="single_post widgets_small">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <span className="tranding">
									<FontAwesome name="bolt"/>
								</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2">
                                        <Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                    <h4><Link to="/post1">{item.title}</Link></h4>
                                </div>
                            </div>
                            <div className="space-15"/>
                            {dark ? <div className="border_white"/> : <div className="border_black"/>}
                            <div className="space-15"/>
                        </Fragment>
                    ))}
                </div>
                <div className="col-lg-6">
                    {trendingNews.slice(3, 6).map((item, i) => (
                        <Fragment key={i}>
                            <div className="single_post widgets_small">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <span className="tranding">
									<FontAwesome name="bolt"/>
								</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2">
                                        <Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                    <h4><Link to="/post1">{item.title}</Link></h4>
                                </div>
                            </div>
                            <div className="space-15"/>
                            {dark ? <div className="border_white"/> : <div className="border_black"/>}
                            <div className="space-15"/>
                        </Fragment>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default TrendingNews;