/* eslint-env jquery */

import PostSummaryItem from "./PostSummaryItem.js";
import who from "./who.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${who.map(whom => {return(PostSummaryItem(whom));}).join('')}
        </ul>
    `);
}

export default PostSummaryList;