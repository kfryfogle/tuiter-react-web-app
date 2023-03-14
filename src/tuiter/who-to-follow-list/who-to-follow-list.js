import React from 'react';
import {useSelector} from "react-redux";

import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector(state => state.who);
    return(
        <ul className="list-group">
            <li key={"wd-follow-suggestion-heading"} className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who => <WhoToFollowListItem who={who} key={who.handle}/>)
            }
        </ul>
    )
}

export default WhoToFollowList;