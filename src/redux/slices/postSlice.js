import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/postService";

const initialState = {
    posts: [],
    loading: false
}

const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, thunkAPI) => {
        try{
            const {data} = await postService.getAll()
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAllPosts.pending, (state, action) => {
                state.loading = true
            })
})

const {reducer:postReducer} = postSlice

const postActions = {
    getAllPosts
}

export {
    postReducer,
    postActions
}
