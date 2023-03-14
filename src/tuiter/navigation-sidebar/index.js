import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHome, faVial, faHashtag, faEllipsisH, faBell,
    faEnvelope, faBookmark, faList, faUser } from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <>
            <div className={"col-2 d-lg-none"}>
                <div className="list-group">
                    <a className="list-group-item">Tuiter </a>
                    <Link to="/tuiter/home" className={`list-group-item 
                    ${(active === 'home' || (paths.length === 2 && paths[1] === 'tuiter')) ? 'active': ''}`}>
                        <FontAwesomeIcon icon={faHome}/>
                    </Link>
                    <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                        <FontAwesomeIcon icon={faHashtag}/>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faVial}/>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faBell}/>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faBookmark}/>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faList}/>
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faUser}/>
                    </Link>
                    <Link to="/" className={`list-group-item ${active === 'more'?'active':''}`}>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </Link>
                </div>
            </div>
            <div className="d-none d-lg-block col-md-2 col-lg-2 col-xl-2">
                <div className="list-group">
                    <a className="list-group-item">Tuiter </a>
                    <Link to="/tuiter/home" className={`list-group-item 
                    ${(active === 'home' || (paths.length === 2 && paths[1] === 'tuiter')) ? 'active': ''}`}>
                        <FontAwesomeIcon icon={faHome}/> Home
                    </Link>
                    <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                        <FontAwesomeIcon icon={faHashtag}/> Explore
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faVial}/> Labs
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faBell}/> Notifications
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faEnvelope}/> Messages
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faBookmark}/> Bookmarks
                    </Link>
                    <Link to="/" className="list-group-item">
                        <FontAwesomeIcon icon={faList}/> Lists
                    </Link>
                    <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                        <FontAwesomeIcon icon={faUser}/> Profile
                    </Link>
                    <Link to="/" className={`list-group-item ${active === 'more'?'active':''}`}>
                        <FontAwesomeIcon icon={faEllipsisH}/> More
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NavigationSidebar;