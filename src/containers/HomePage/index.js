import React, {Fragment} from 'react';
import PostCarousel from "../../components/PostCarousel";
import PostGallery from "../../components/PostGallery";
import FeatureNews from "../../components/FeatureNews";
import TrendingNews from "../../components/TrendingNews";
import FollowUs from "../../components/FollowUs";
import MostView from "../../components/MostView";
import MixCarousel from "../../components/MixCarousel";
import VideoPost from "../../components/VideoPost";
import EntertainmentNews from "../../components/EntertainmentNews";
import {Link} from "react-router-dom";
import SportsNews from "../../components/SportsNews";
import BusinessNews from "../../components/BusinessNews";
import MostShareWidget from "../../components/MostShareWidget";
import UpcomingMatches from "../../components/UpcomingMatches";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";

// images
import banner1 from '../../assets/img/bg/banner1.png';
import banner2 from '../../assets/img/bg/sidebar-1.png';

// Data
import {entertainments, businessNews} from "../../common/data/homePage"


const HomePage = () => {
    return (
        <Fragment>
            <PostCarousel className="fifth_bg"/>
            <PostGallery className="fifth_bg"/>
            <FeatureNews/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <TrendingNews/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <FollowUs title="Síguenos"/>
                        <MostView/>
                    </div>
                </div>
            </div>
            <MixCarousel className="half_bg1"/>
            <VideoPost className="pt30 half_bg60"/>
            <div className="entertrainments">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading">
                                        <h2 className="widget-title">Noticias De Entretenimiento</h2>
                                    </div>
                                </div>
                            </div>
                            {/*CAROUSEL START*/}
                            <div className="entertrainment_carousel mb30">
                                <div className="entertrainment_item">
                                    <div className="row justify-content-center">
                                        <EntertainmentNews entertainments={entertainments}/>
                                    </div>
                                </div>
                            </div>
                            {/*CAROUSEL END*/}
                            <SportsNews/>
                            <div className="banner_area mt50 mb60 xs-mt60">
                                <Link to="/">
                                    <img src={banner1} alt="banner1"/>
                                </Link>
                            </div>
                            <BusinessNews businessNews={businessNews}/>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <MostShareWidget title="Lo Más Compartido"/>
                                </div>
                                <div className="col-lg-12">
                                    <UpcomingMatches/>
                                </div>
                                <div className="col-lg-12">
                                    <NewsLetter/>
                                </div>
                                <div className="col-lg-12">
                                    <CategoriesWidget/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="banner2 mb30">
                                        <Link to="/">
                                            <img src={banner2} alt="thumb"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
        </Fragment>
    );
};

export default HomePage;