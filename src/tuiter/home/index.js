import React from "react";
import PostSummaryList from "../post-summary-list/post-summary-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <PostSummaryList/>
        </>
    );
}

export default HomeComponent;