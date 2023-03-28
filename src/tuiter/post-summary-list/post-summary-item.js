import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faComment,
    faHeart,
    faThumbsDown,
    faRetweet,
    faShare,
    faX
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {toggleLike} from "../tuits/tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const PostSummaryItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "tuit title",
            "image": "spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "tuit space"
        }
    }
) => {
    const dispatch = useDispatch();
    const likeToggleClickHandler = (index) => {
        dispatch(toggleLike(index));
    }
    const deleteTuitClickHandler = (index) => {
        dispatch(deleteTuitThunk(index));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="float-end rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className={"row"}>
                        <div className={"col-10"}>
                            <b>{post.username}</b> <FontAwesomeIcon className={"wd-badge-blue"} icon={faCheckCircle}/> • {post.time}
                        </div>
                        <div className={"col-2 text-end "}>
                            <button onClick={() => deleteTuitClickHandler(post._id)}
                                    className={"wd-post-relevance wd-post-interaction-button"}>
                                <FontAwesomeIcon icon={faX}/>
                            </button>
                        </div>
                    </div>
                    <div>{post.tuit}</div>
                    {/* comments, retuits, likes, share */}
                    <div className="col-12 pt-2 pb-2">
                        <div className="wd-post-interaction-item">
                            <a className="wd-clean-link wd-post-relevance" href="#">
                                <FontAwesomeIcon icon={faComment}/> {post.replies} </a>
                        </div>
                        <div className="wd-post-interaction-item">
                            <a className="wd-clean-link wd-post-relevance" href="#">
                                <FontAwesomeIcon icon={faRetweet}/> {post.retuits} </a>
                        </div>
                        <div className="wd-post-interaction-item">
                            <button className={`wd-post-interaction-button wd-post-relevance`}
                                    onClick={() => dispatch(updateTuitThunk({
                                        ...post,
                                        likes: post.likes + 1,
                                        }))}>
                                <span className={'wd-fg-like'}>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </span> {post.likes}
                            </button>
                        </div>
                        <div className="wd-post-interaction-item">
                            <button className={`wd-post-interaction-button wd-post-relevance`}
                                    onClick={() => dispatch(updateTuitThunk({
                                        ...post,
                                        dislikes: post.dislikes + 1,
                                    }))}>
                                <span>
                                    <FontAwesomeIcon icon={faThumbsDown}/>
                                </span> {post.dislikes}
                            </button>
                        </div>
                        <div className="wd-post-interaction-item">
                            <a className={"wd-clean-link wd-fg-grey wd-post-relevance"} href="#">
                                <FontAwesomeIcon icon={faShare}/>
                            </a>
                        </div>
                        <div className="wd-float-done"/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;