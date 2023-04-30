import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    filterList: [],
    isLoading: false,
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const { data } = await axios.get('./data.json');
    return data;
})

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        filter: (state, action) => {
            state.filterList = state.items.filter(item => item.name === action.payload)
        }
    },
    extraReducers: {
        [fetchData.fulfilled]: (state, { payload }) => {
            state.items = payload;
            state.isLoading = false;
        }
    }
})

export const { filter } = dataSlice.actions;
export default dataSlice.reducer;