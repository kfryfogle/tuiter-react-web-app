import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {editProfile, toggleDOBEdit} from "../reducers/profile-reducer";

const EditProfileComponent = () => {

    const profile = useSelector(state => state.profile);
    const datesplit = profile.dateOfBirth.split("/");
    const dateformatting = (dateitem) => {
        if (dateitem.length < 2) {
            return ('0' + dateitem)
        }
        return dateitem;
    }
    const datereformat = (dateitem) => {
        // YYYY-MM-DD => MM-DD-YYYY
        const redatesplit = dateitem.split("-");
        const redate = redatesplit[1] + "/" + redatesplit[2] + "/" + redatesplit[0];
        return redate;
    }
    // MM-DD-YYYY => YYYY-MM-DD
    const dateformat = datesplit[2] + '-' + dateformatting(datesplit[0]) + '-' + dateformatting(datesplit[1]);
    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [site, setSite] = useState(profile.website);
    const [date, setDate] = useState(dateformat);
    const dispatch = useDispatch();

    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
    }
    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        setBio(bioValue);
    }
    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        setLocation(locationValue);
    }
    const siteChangeHandler = (event) => {
        const siteValue = event.target.value;
        setSite(siteValue);
    }
    const dateChangeHandler = (event) => {
        const dateValue = event.target.value;
        setDate(dateValue);
    }
    const toggleEditDOBHandler = () => {
        dispatch(toggleDOBEdit(profile));
    }
    // Amass all edited input fields, apply to current profile object
    const editProfileClickHandler = () => {
        const newdate = datereformat(date);
        const data = {
            name: name,
            handle: profile.handle,
            bio: bio,
            location: location,
            dateOfBirth: newdate,
            website: site
        }
        dispatch(toggleDOBEdit(profile));
        dispatch(editProfile(data));
    }

    return(
        <div className={"wd-side-borders"}>
            {/*Heading <- name, # tweets underneath*/}
            <div className={"container pb-2"}>
                <div className={"row"}>
                    <div className={"col-1 pt-2"}>
                        <Link to="/tuiter/profile">
                            <button className={"wd-post-relevance wd-post-interaction-button"}
                                    onClick={toggleEditDOBHandler}>
                                <FontAwesomeIcon icon={faX}/>
                            </button>
                        </Link>
                    </div>
                    <div className={"col-9 text-start pt-2"}>
                        <div className={"col-12 text-start"}>
                            <p className={"mb-0 pb-0 mb-0"}>
                                <span className={"wd-profile-name-head"}>Edit Profile</span>
                            </p>
                        </div>
                    </div>
                    <div className={"col-2 text-end pb-1"}>
                        <button onClick={editProfileClickHandler}
                                className={"rounded-pill wd-save-button"}>Save</button>
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
                            <div className={"col-12 text-start m-0 wd-profile-img-div"}>
                                <img className={"rounded-circle wd-profile-img-position"}
                                     width={"130px"} height={"130px"}
                                     src={`/images/${profile.profilePicture}`}/>
                            </div>
                        </div>
                    </div>
                    {/* Name Input*/}
                    <div className={"col-12 text-start mt-2"}>
                        <span className={"wd-edit-top wd-fg-grey"}>Name</span>
                        <textarea onChange={nameChangeHandler}
                                  className={"w-100 wd-edit-box rounded"}
                                  placeholder={"Name"} rows={1}
                                  defaultValue={profile.firstName + ' ' + profile.lastName}/>
                    </div>
                    {/* Bio Input*/}
                    <div className={"col-12 text-start mt-2"}>
                        <span className={"wd-edit-top wd-fg-grey"}>Bio</span>
                        <textarea onChange={bioChangeHandler}
                                  className={"w-100 wd-edit-box rounded"}
                                  placeholder={"Bio"} rows={3} defaultValue={profile.bio}/>
                    </div>
                    {/* Location Input*/}
                    <div className={"col-12 text-start mt-2"}>
                        <span className={"wd-edit-top wd-fg-grey"}>Location</span>
                        <textarea onChange={locationChangeHandler}
                                  className={"w-100 wd-edit-box rounded"}
                                  placeholder={"Location"} rows={1} defaultValue={profile.location}/>
                    </div>
                    {/* Website Input*/}
                    <div className={"col-12 text-start mt-2 wd-fg-grey"}>
                        <span className={"wd-edit-top wd-fg-grey"}>Website</span>
                        <textarea onChange={siteChangeHandler}
                                  className={"w-100 wd-edit-box rounded"}
                                  placeholder={"Website"} rows={1}
                                  defaultValue={profile.website}>
                        </textarea>
                    </div>
                    {/* Edit Birthday */}
                    { !profile.editDOB &&
                      <div className={"col-12 text-start mt-2 mb-2"}>
                          <label for={"wd-dob"}>
                              Birth Date •
                              <button onClick={toggleEditDOBHandler} className={"wd-edit-date-button"}> Edit</button>
                          </label>
                          <p id={"wd-dob"}>
                              {profile.dateOfBirth}
                          </p>
                          <div className={"wd-float-done"}/>
                      </div>
                    }
                    { profile.editDOB &&
                      <div className={"col-12 text-start mt-2 wd-date-space"}>
                          <label htmlFor={"wd-dob-edit"}>Birth Date </label><br/>
                          <input type={"date"} id={"wd-dob-edit"} value={date} onChange={dateChangeHandler}/>
                          <div className={"wd-float-done"}/>
                      </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default EditProfileComponent;
