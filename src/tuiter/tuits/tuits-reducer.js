import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice(
    {
        name: "tuits",
        initialState: tuits,
        reducers: {
            createTuit(state, action) {
                state.unshift({
                                  ...action.payload,
                                  ...templateTuit,
                                  _id: (new Date()).getTime(),
                              })
            },
            deleteTuit(state, action) {
                const index = action.payload
                state.splice(index, 1)
            },
            toggleLike(state, action) {
                const tuit = state.find(
                    (item) => item._id === action.payload._id
                )
                tuit.liked ? tuit.likes -= 1: tuit.likes += 1
                tuit.liked = !tuit.liked
            },

        }
    });

export const {createTuit, deleteTuit, toggleLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;