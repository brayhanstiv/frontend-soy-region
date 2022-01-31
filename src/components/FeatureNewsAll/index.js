// Packages
import React from 'react';
import {Link} from "react-router-dom";

// Data
import {news} from "../../common/data/featureNewsAll"

const FeatureNewsAll = () => {
    return (
        <div className="row justify-content-center">
            {news.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <div className="single_post post_type6 post_type7 mb30">
                        <div className="post_img gradient1">
                            <Link to="/"><img src={item.image} alt="thumb"/></Link>
                        </div>
                        <div className="single_post_text">
                            <div className="meta5"><Link to="/">{item.category}</Link>
                                <Link to="/">{item.date}</Link>
                            </div>
                            <h4>
                                <Link to="/post1">{item.title}</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureNewsAll;