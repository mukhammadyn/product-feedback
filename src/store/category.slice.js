import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "../packages/api/rest/category";

export const getCategories = createAsyncThunk(
  'get/categories',
  async function() {
    return fetchCategory()
  }
)

const name = "category";

const initialState = {
  loading: false,
  error: null,
  categories: [],
  activeCategory: 'All'
};

const categorySlice = createSlice({
  name,
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categories.forEach(category => {
        if(+category.id !== +action.payload.id) {
          category.isActive = false
        } else if(+category.id === +action.payload.id) {
          category.isActive = true
        }
      })
      state.activeCategory = action.payload.category
    }
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload
    }
  }
});

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer;
