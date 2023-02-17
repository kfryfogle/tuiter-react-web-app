/* eslint-env jquery */

import NavigationSidebar from "../../explore/NavigationSidebar/NavigationSidebar.js";
import PostSummaryList from "../../explore/ExploreComponent/PostSummaryList.js";
import PostList from "../PostList/PostList.js";

const HomeDomain = () => {
    return(`
        <div class="row mt-2">
            <!-- Left Column <= M -->
            <div class="wd-nav-link-box col-2 d-lg-none ms-1 me-0">
                ${NavigationSidebar('Home', 'small')}
            </div>
            <!-- Left Column L+ -->
            <div class="wd-nav-link-box d-none d-lg-block col-lg-1 col-xl-2 ms-1 me-0">
                ${NavigationSidebar('Home', 'large')}
            </div>
            <!-- Main Content -->
            <div class="col-9 col-lg-7 col-xl-6 text-white m-0 p-0 bg-color-blue">
                ${PostList()}
            </div>
            <div class="d-none d-lg-block col-lg-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
}

export default HomeDomain;