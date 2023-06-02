import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: [],
    errors: null,
    loading: false,
    selectedUser: null,
    postsById: []
}

const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, thunkAPI) => {
        try {
            const {data} = await userService.getAll()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getPostsById = createAsyncThunk(
    'userSlice/getPostsById',
    async ({id}, thunkAPI) => {
        try{
            const {data} = await userService.getPostsById(id)
            return data

        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAllUsers.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getPostsById.fulfilled, (state, action) => {
                state.loading = false
                state.postsById = action.payload
            })
            .addCase(getPostsById.pending, (state, action) => {
                state.loading = true
            })
})

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice

const userActions = {
    getAllUsers,
    setSelectedUser,
    getPostsById
}

export {
    userReducer,
    userActions
}

