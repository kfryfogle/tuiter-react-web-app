/* eslint-env jquery */

import SearchBar from "./SearchBar.js";
import Tabs from "./Tabs.js";
import Headline from "./Headline.js";
import PostSummaryList from "./PostSummaryList.js";

const ExploreComponent = (size) => {
    return(`
            ${SearchBar()}
            <!-- Tabs -->
            ${Tabs(size)}
            <!-- Image with Headline -->
            ${Headline()}
            <!-- PostSummaryList, PostSummaryItem -->
            ${PostSummaryList()}
    `);
}

export default ExploreComponent;