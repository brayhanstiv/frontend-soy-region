// Packages
import React from 'react';
import {Link} from "react-router-dom";

// Images
import mobile from '../../assets/img/icon/mobile.png';
import speaker from '../../assets/img/icon/speacker.png';
import envelope from '../../assets/img/icon/evelope.png';

// Data
import {news} from "../../common/data/footerMoreNews"

const FooterMoreNews = () => {
    return (
        <div className="extra_newss border_white_left pl-4">
            <h3 className="widget-title2">Más noticias</h3>
            {news.map((item, i) => (
                <div key={i} className="single_extra_news border_white_bottom">
                    <p>{item.category} <span> / {item.date}</span></p>
                    <Link to="/">{item.title}</Link>
                    <span className="news_counter">{i + 1}</span>
                </div>
            ))}
            <div className="space-40"/>
            <div className="border_white_bottom"/>
            <div className="space-40"/>
            <div className="footer_contact">
                <h3 className="widget-title2">Servicios de noticias de Newspark</h3>
                <div className="single_fcontact">
                    <div className="fcicon">
                        <img src={mobile} alt="mobile"/>
                    </div>
                    <Link to="/">En tu móvil</Link>
                </div>
                <div className="single_fcontact">
                    <div className="fcicon">
                        <img src={speaker} alt="speaker"/>
                    </div>
                    <Link to="/">En los altavoces inteligentes</Link>
                </div>
                <div className="single_fcontact">
                    <div className="fcicon">
                        <img src={envelope} alt="evelope"/>
                    </div>
                    <Link to="/">Contactar con Newspark news</Link>
                </div>
            </div>
        </div>
    );
};

export default FooterMoreNews;