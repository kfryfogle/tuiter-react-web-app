import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faCake, faCalendarAlt, faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div className={"wd-side-borders"}>
            {/*Heading <- name, # tweets underneath*/}
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-1 text-center pt-1"}>
                        <button className={"wd-post-relevance wd-post-interaction-button"}>
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </button>
                    </div>
                    <div className={"col-11 text-start pt-1 pb-2"}>
                        <div className={"col-12 text-start"}>
                            <p className={"mb-0"}>
                                <span className={"wd-profile-name-head"}>{profile.firstName} {profile.lastName}</span>
                                {/*<br/>
                                <span className={"wd-accent-text"}>{profile.handle}</span>*/}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Photo Banner*/}
            <div className={"container p-0"}>
                <img alt={"alttest"}
                     width={"100%"} height={"200px"}
                     src={`/images/${profile.bannerPicture}`}/>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    {/* Photo,  edit profile button */}
                    <div className={"col-12 mt-2"}>
                        <div className={"row"}>
                            <div className={"col-9 text-start m-0 wd-profile-img-div"}>
                                <img className={"rounded-circle wd-profile-img-position"}
                                     width={"130px"} height={"130px"}
                                     src={`/images/${profile.profilePicture}`}/>
                            </div>
                            <div className={"col-3 text-center"}>
                                <Link to="/tuiter/edit-profile/">
                                    <button className={"rounded-pill wd-edit-button"}>
                                        <span className={"m-2"}>Edit Profile</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Name, Handle*/}
                    <div className={"col-12 text-start mt-2"}>
                        <p className={"mb-0"}>
                            <span className={"wd-profile-name-head"}>{profile.firstName} {profile.lastName}</span><br/>
                            <span className={"wd-accent-text"}>{profile.handle}</span>
                        </p>
                    </div>
                    {/* Bio */}
                    <div className={"col-12 text-start mt-2"}>
                        <p>
                            {profile.bio}
                        </p>
                    </div>
                    {/* location, bday, joined ___ */}
                    <div className={"col-12 text-start mt-2 wd-fg-grey"}>
                        <div className={"wd-float-box"}>
                            <FontAwesomeIcon icon={faLocationDot}/> {profile.location}
                        </div>
                        <div className={"wd-float-box ps-3"}>
                            <FontAwesomeIcon icon={faCake}/> {profile.dateOfBirth}
                        </div>
                        <div className={"wd-float-box ps-3"}>
                            <FontAwesomeIcon icon={faCalendarAlt}/> Joined {profile.dateJoined}
                        </div>
                        <div className={"wd-float-done"}/>
                    </div>
                    {/* Followers, following */}
                    <div className={"col-12 text-start mt-2"}>
                        <div className={"wd-float-box"}>
                            <span className={"wd-font-bold"}>{profile.followersCount}</span>
                            <span className={"wd-fg-grey"}> Followers</span>
                        </div>
                        <div className={"wd-float-box ps-2"}>
                            <span className={"wd-font-bold"}>{profile.followingCount}</span>
                            <span className={"wd-fg-grey"}> Following</span>
                        </div>
                        <div className={"wd-float-done"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  ProfileComponent;

