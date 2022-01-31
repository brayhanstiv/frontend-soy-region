import React from 'react';
import {Link} from "react-router-dom";
import sportsbig1 from "../../assets/img/sports/sportsbig1.jpg";
import SportsCarousel from "../SportsCarousel";
import FontAwesome from "../uiStyle/FontAwesome";

const SportsNews = ({dark}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="sports">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h2 className="widget-title">Noticias deportivas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single_post post_type3 mb30">
                                <div className="post_img">
                                    <Link to="/">
                                        <img src={sportsbig1} alt="sportsbig1"/>
                                    </Link> <span className="tranding">
													<FontAwesome name="bolt"/>
												</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta3"><Link to="/">DEPORTES</Link>
                                        <Link to="/">Marzo 26, 2020</Link>
                                    </div>
                                    <h4><Link to="/post1">Hacer ejercicio podría reducir un 60% el riesgo de tener ansiedad
                                        </Link></h4>
                                    <div className="space-10"/>
                                    <p className="post-p">Realizar ejercicio físico de manera habitual, sobre todo si la actividad es de alta intensidad, podría ayudar a reducir el riesgo de desarrollar …</p>
                                    <div className="space-20"/>
                                    <Link to="/" className="readmore">Leer Más</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sports_carousel nav_style1">
                                <SportsCarousel dark={dark ? dark : false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsNews;