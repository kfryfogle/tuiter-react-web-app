/* eslint-env jquery */



import PostList from "./PostList.js";

$('#wd-posts').append(`
    ${PostList()}
`);