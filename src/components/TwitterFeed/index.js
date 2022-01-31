import React from 'react';
import FontAwesome from "../uiStyle/FontAwesome";

// Data
import {twitts} from "../../common/data/twitterFeed"

const TwitterFeed = () => {
    return (
        <div className="twitter_feeds">
            <h3 className="widget-title2">Twitter feed</h3>
            {twitts.map((item, i) => (
                <div key={i} className="single_twitter_feed border_white_bottom">
                    <div className="twitter_feed_icon"><FontAwesome name="twitter"/>
                    </div>
                    <h6>{item.title}… <span>{item.linkText}</span></h6>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
};

export default TwitterFeed;