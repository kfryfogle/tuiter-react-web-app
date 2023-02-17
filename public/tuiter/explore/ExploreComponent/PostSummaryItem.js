/* eslint-env jquery */

const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="container wd-post-item ps-2 pt-2 pe-1 pb-1 bg-light">
                <div class="row">
                    <div class="col-9">
                        <p class="wd-post-relevance"> ${post.topic} <br/>
                            <b class="wd-post-bold">
                                ${post.userName} <i class="fa fa-check-circle"></i>
                            </b> 
                             - ${post.time}<br/>
                            <b>${post.title}</b>
                        </p>
                    </div>
                    <div class="col-3">
                        <div class="wd-image-post-box m-2">
                            <img src="${post.image}">
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;