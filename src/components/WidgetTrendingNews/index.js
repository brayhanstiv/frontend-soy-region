// Packages
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

// Styles
import FontAwesome from "../uiStyle/FontAwesome";

// Images
import trendbig1 from '../../assets/img/trending/trendbig1.jpg';

// Data
import {posts} from "../../common/data/widgetTrendingNews"

const WidgetTrendingNews = ({dark}) => {
    return (
        <div className="trending_widget mb30">
            <h2 className="widget-title">Noticias en tendencias</h2>
            <div className="single_post post_type3">
                <div className="post_img">
                    <div className="img_wrap">
                        <img src={trendbig1} alt="trendbig1"/>
                    </div>
                    <span className="tranding"><FontAwesome name="bolt"/></span>
                </div>
                <div className="single_post_text">
                    <div className="meta3"><Link to="/">TECNOLOGÍA</Link>
                        <Link to="/">Marzo 26, 2020</Link>
                    </div>
                    <h4><Link to="/post1">Asesinan a niño defensor del medio ambiente en el Cauca</Link></h4>
                    <div className="space-10"/>
                    <p className="post-p">En Colombia los asesinatos de líderes sociales y de ambientalistas 
                    que trabaja en zonas de conflicto armado son hechos reprochables que atentan…</p>
                </div>
            </div>

            {posts.map((item, i) => (
                <Fragment key={i}>
                    <div className="space-15"/>
                    {dark ? <div className="border_white"/> : <div className="border_black"/>}
                    <div className="space-30"/>
                    <div className="single_post widgets_small">
                        <div className="post_img">
                            <div className="img_wrap">
                                <img src={item.photo} alt="thumb"/>
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
                </Fragment>
            ))}
        </div>
    );
};

export default WidgetTrendingNews;