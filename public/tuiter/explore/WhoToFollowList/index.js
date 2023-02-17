/* eslint-env jquery */
import WhoToFollowList from "./WhoToFollowList.js";

$('#wd-follow').append(`
    <div class="container">
        ${WhoToFollowList()}
    </div>
`);

