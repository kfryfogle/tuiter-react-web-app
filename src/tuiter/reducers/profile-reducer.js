import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../data/profile.json";

const profileSlice = createSlice(
    {
        name: "profile",
        initialState: profileArray,
        reducers: {
            editProfile(state, action) {
                const profile = state;
                const names = action.payload.name.split(" ");
                profile.firstName = names[0];
                profile.lastName = names[1];
                profile.bio = action.payload.bio;
                profile.location = action.payload.location;
                profile.dateOfBirth = action.payload.dateOfBirth;
                profile.website = action.payload.website;
            },
            toggleDOBEdit(state) {
                const profile = state
                profile.editDOB = !profile.editDOB

            }
        }
    });

export const {editProfile, toggleDOBEdit} = profileSlice.actions;
export default profileSlice.reducer;