import React from 'react';
import "./index.css";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/who-to-follow-list";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducer";
import profileReducer from "./reducers/profile-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, profile: profileReducer, tuits: tuitsReducer}});



function Tuiter() {
    return(
        <Provider store={store}>
            <div className={"container"}>
                <div className="row mt-2">
                    <NavigationSidebar/>
                    <div className="col-10 col-md-10 col-lg-6 col-xl-6" style={{"position": "relative"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        </Routes>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter