// Packages
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

// Components
import BreadCrumb from "../../components/BreadCrumb";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import EntertainmentNews from "../../components/EntertainmentNews";

// Styles 
import FontAwesome from "../../components/uiStyle/FontAwesome";

// images
import banner2 from "../../assets/img/bg/sidebar-1.png";
import BannerSection from "../../components/BannerSection";

// Data
import {trendings} from "../../common/data/trendingPage"

const TrendingPage = () => {
    return (
        <Fragment>
            <BreadCrumb title="Economía"/>
            <div className="archives padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12 align-self-center">
                                    <div className="categories_title">
                                        <h5>Categoría: <Link to="/">Economía</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="entertrainment_carousel">
                                <div className="entertrainment_item">
                                    <div className="row justify-content-center">
                                        <EntertainmentNews headerHide={false} entertainments={trendings}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="cpagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Previous">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-left"/></span>
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/">1</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/">..</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/">5</Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Next">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <WidgetTab/>
                            <WidgetTrendingNews/>
                            <NewsLetter/>
                            <FollowUs title="Síguenos"/>
                            <div className="banner2 mb30">
                                <Link to="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
            <BannerSection/>
        </Fragment>
    );
};

export default TrendingPage;