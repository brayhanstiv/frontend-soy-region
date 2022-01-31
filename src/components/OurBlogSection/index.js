// Packages
import React from 'react';
import {Link} from "react-router-dom";

// Data
import {blog} from "../../common/data/ourBlogSection"

const OurBlogSection = ({dark}) => {
    return (
        <div className={`${dark ? 'primay_bg' : 'fourth_bg'} padding6030`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">
                            <h2 className="widget-title">Nuestro último blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {blog.map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4">
                            <div className="single_post post_type3 mb30">
                                <div className="post_img">
                                    <Link to="/">
                                        <img src={item.photo} alt="thumb"/>
                                    </Link>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta3">
                                        <Link to="/">{item.category}</Link>
                                        <Link to="/">{item.date}</Link>
                                    </div>
                                    <h4><Link to="/post1">{item.title}</Link></h4>
                                    <div className="space-10"/>
                                    <p className="post-p">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlogSection;