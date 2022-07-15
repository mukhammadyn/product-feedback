import {configureStore} from '@reduxjs/toolkit'
import categorySlice from './category.slice'
import feedbackSlice from './feedback.slice'

export default configureStore({
  reducer: {
    categories: categorySlice,
    feedbacks: feedbackSlice
  }
})
