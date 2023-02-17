/* eslint-env jquery */

import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return(`
        ${posts.map(post => {return(PostItem(post));}).join('')}
    `);
}


export default PostList;