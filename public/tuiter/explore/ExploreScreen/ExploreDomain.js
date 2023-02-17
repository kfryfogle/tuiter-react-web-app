/* eslint-env jquery*/

import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";



const ExploreDomain = () => {
    return(`
      <div class="row mt-2">
        <!-- Left Column <= M -->
        <div class="wd-nav-link-box col-2 d-lg-none ms-1 me-0">
            ${NavigationSidebar('Explore', 'small')}
        </div>
        <!-- Left Column L+ -->
        <div class="wd-nav-link-box d-none d-lg-block col-lg-1 col-xl-2 ms-1 me-0">
            ${NavigationSidebar('Explore', 'large')}
        </div>
        <!-- Center Column L+ -->
        <div class="col-9 d-md-none">
            ${ExploreComponent('small')}
        </div>
        <!-- Center Column L+ -->
        <div class="d-none d-md-block col-md-9 col-lg-7 col-xl-6 text-white m-0 p-1">
            ${ExploreComponent('large')}
        </div>
        <!-- Right Column -->
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ps-0 pe-0 text-white">
            ${WhoToFollowList()}
        </div>
      </div>
    `);
}

export default ExploreDomain;