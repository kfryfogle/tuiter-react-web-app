/* eslint-env jquery */

import accounts from './accounts.js';
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <div class="container">
            <div class="list-group wd-content-width">
               <div class="list-group-item">
                    <b>Who to follow</b>
               </div>
               ${accounts.map(who => {return(WhoToFollowListItem(who));}).join('')}
           </div>
        </div>
    `)
}

export default WhoToFollowList;