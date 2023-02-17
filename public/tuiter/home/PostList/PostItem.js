/* eslint-env jquery */

import PostInsert from "./PostInsert.js";

const PostItem = (post) => {
    return(`
        <div class="container wd-post-list-item">
            <div class="row mt-2">
                <div class="col-1 wd-post-item-image text-center wd-content-width">
                    <!-- profile photo column -->
                    <img class="wd-image-frame-profile-post"
                         width="40px" height="40px" src="${post.avatarIcon}">
                </div>
                <div class="col-10 wd-post-item-info">
                    <!-- account info, ellipsis row -->
                    <div class="row mt-0 pt-0">
                        <div class="col-10 text-start">
                            <p class="mb-0">
                                <span class="wd-fg-white"><b>${post.userName}</b> <i class="fa fa-check-circle"></i></span>
                                <span class="wd-fg-grey">@${post.handle} &bullet; ${post.time}</span>
                            </p>
                        </div>
                        <div class="col-2 text-end">
                            <i class="fa fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p class="mb-0 wd-fg-white">${post.tuit}</p>
                        </div>
                        <div class="col-12 pt-2">
                            <div class="list-group">
                                ${PostInsert(post)}
                            </div>
                        </div>
                        <!-- comments, retuits, likes, share -->
                        <div class="col-12 pt-2 pb-2">
                            <div class="wd-post-interaction-item">
                                <a class="wd-clean-link wd-fg-grey" href="#"> <i class="fa fa-comment"></i>
                                ${post.comments} </a>
                            </div>
                            <div class="wd-post-interaction-item">
                                <a class="wd-clean-link wd-fg-grey" href="#"> <i class="fa fa-retweet"></i> 
                                ${post.retuits} </a>
                            </div>
                            <div class="wd-post-interaction-item">
                                <a class="wd-clean-link wd-fg-grey" href="#"> <i class="fa fa-heart"></i> 
                                ${post.likes} </a>
                            </div>
                            <div class="wd-post-interaction-item">
                                <a class="wd-clean-link wd-fg-grey" href="#"> 
                                <i class="fa fa-share "></i></a>
                            </div>
                            <div class="wd-float-done">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

export default PostItem;