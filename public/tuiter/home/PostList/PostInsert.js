/* eslint-env jquery */

const PostInsert = (post) => {
    if (post.tuitImg !== '' && post.link !== '') {
        return(`
            <img class="list-group-item m-0 p-0" src="${post.tuitImg}">
            <div class="list-group-item wd-bg-transparent">
                <p class="wd-fg-grey" class="mb-0">
                    <span class="wd-fg-white">${post.linkTitle}</span><br/>
                    ${post.linkDesc}<br/>
                    <i class="fa fa-link"></i> ${post.link}
                </p>
            </div>
        `);
    }
    if (post.tuitImg !== '' && post.link === '') {
        return(`
            <img class="list-group-item m-0 p-0 wd-bg-transparent" src="${post.tuitImg}">
        `);
    }
}

export default PostInsert;