// Packages
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

// Components
import BreadCrumb from "../../components/BreadCrumb";
import BusinessNews from "../../components/BusinessNews";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";

// images
import banner2 from "../../assets/img/bg/sidebar-1.png";
import BannerSection from "../../components/BannerSection";

// Data
import {businessNews} from "../../common/data/businessPage"

const BusinessPage = () => {
    return (
        <Fragment>
            <BreadCrumb title="Business"/>
            <div className="archives padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="businerss_news">
                                <div className="row">
                                    <div className="col-12 align-self-center">
                                        <div className="categories_title">
                                            <h5>Categoria: <Link to="/">Negocios</Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <BusinessNews headerHide={true} businessNews={businessNews}/>
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
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <WidgetTab/>
                            <WidgetTrendingNews/>
                            <NewsLetter/>
                            <FollowUs title="Follow Us"/>
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

export default BusinessPage;