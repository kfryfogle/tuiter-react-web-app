import React from "react";

import { Dot  } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faComment, faHeart, faShare, faCircleCheck, faEllipsisH, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeComponent = () => {
    return (
        <>
            {/* Retweet Post */}
            <div className="container wd-post-list-item">
                <div className="row">
                    <div className="col-1 mt-2"></div>
                    <div className="col-11 mt-2">
                        <span className="wd-post-relevance">
                            <b><FontAwesomeIcon icon={faRetweet}/> Elon Musk Retweeted</b>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 wd-post-item-image text-center wd-content-width">
                        <img className="wd-image-frame-profile-post" width="40px" height="40px" src="/images/spacex.jpeg"/>
                    </div>
                    <div className="col-10 wd-post-item-info">
                        <div className="row mt-0 pt-0">
                            <div className="col-10 text-start">
                                <p className="mb-0">
                                    <span className="wd-fg-white"><b>SpaceX </b>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#1DA1F2"/>
                                    </span>
                                    <span
                                        className="wd-post-relevance"> @SpaceX <Dot/> 23h</span>
                                </p>
                            </div>
                            <div className="col-2 text-end">
                                <FontAwesomeIcon className="wd-post-relevance" icon={faEllipsisH} color="#1DA1F2"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0"> Dennis and Akiko Tito are
                                    the first two crew members on Starship's second commercial
                                    spaceflight around the Moon <i className="fa fa-arrow-left"/>
                                    <a className="wd-blue-hyperlink">spacex.com/updates</a>
                                </p>
                            </div>
                            {/* insert media */}
                            <div className="col-12 pt-2">
                                <div className="list-group">
                                    <img className="list-group-item m-0 p-0 wd-bg-transparent"
                                         src="/images/titos.jpeg"/>
                                </div>
                            </div>
                            {/* comments, retuits, likes, share */}
                            <div className="col-12 pt-2 pb-2">
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-fg-grey wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faComment}/> 595 </a>
                                </div>
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-fg-grey wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faRetweet}/> 1168 </a>
                                </div>
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faHeart}/> 11.1K </a>
                                </div>
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-fg-grey wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faShare}/></a>
                                </div>
                                <div className="wd-float-done"/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <a className="wd-show-thread wd-clean-link wd-blue-hyperlink">Show This Thread</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Comment Post */}
            <div className="container wd-post-list-item-n">
                <div className="row">
                    <div className="mt-3"></div>
                    <div className="col-1 wd-post-item-image text-center wd-content-width">
                        <img className="wd-image-frame-profile-post" width="40px" height="40px" src="/images/starship_mk1.jpeg"/>
                    </div>
                    <div className="col-10 wd-post-item-info">
                        <div className="row mt-0 pt-0">
                            <div className="col-10 text-start">
                                <p className="mb-0">
                                    <span className="wd-fg-white"><b>Elon Musk </b>
                                        <FontAwesomeIcon icon={faCircleCheck} color="#1DA1F2"/>
                                    </span>
                                    <span
                                        className="wd-post-relevance"> @elonmusk <Dot/> 23h</span>
                                </p>
                            </div>
                            <div className="col-2 text-end">
                                <FontAwesomeIcon className="wd-post-relevance" icon={faEllipsisH} color="#1DA1F2"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0 wd-fg-white"> We might need a different name,
                                    as this is basically just Starlink with roaming capability, so
                                    you can take your terminal anywhere.
                                </p>
                            </div>
                            {/* insert media */}
                            <div className="col-12 pt-2">
                                <div className="list-group">
                                    <div className="list-group-item">
                                        <div className="row">
                                            <div className="col-1 justify-content-end">
                                                <img className="wd-image-frame-profile-post" width="25px" height="25px" src="/images/spacex.jpeg"/>
                                            </div>
                                            <div className="col-11 text-start">
                                                SpaceX <span className="wd-post-relevance">@SpaceX</span>
                                            </div>
                                            <div className="float-done"/>
                                        </div>
                                        <div className="row">
                                            <p>Starlink for RVs now has over 100,000 customers!
                                                Access high-speed, low latency internet on an as-
                                                needed bases anywhere Starlink provides active
                                                coverage <FontAwesomeIcon icon={faArrowRight}/> starlink.com/rv
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* comments, retuits, likes, share */}
                            <div className="col-12 pt-2 pb-2">
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-fg-grey wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faComment}/> 5,346 </a>
                                </div>
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-fg-grey wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faRetweet}/> 1,601 </a>
                                </div>
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faHeart}/> 19.2K </a>
                                </div>
                                <div className="wd-post-interaction-item">
                                    <a className="wd-clean-link wd-fg-grey wd-post-relevance" href="#">
                                        <FontAwesomeIcon icon={faShare}/></a>
                                </div>
                                <div className="wd-float-done"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;