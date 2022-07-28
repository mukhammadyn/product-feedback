import { v4 as uuidv4 } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addFeedback,
  changeFeedback,
  fetchFeedback,
  addNewComment as newComment,
  replyComment,
  editFeedback,
  deleteFeedback,
} from "../packages/api/rest/feedback";

export const getFeedbacks = createAsyncThunk(
  "get/feedbacks",
  async function () {
    const data = await fetchFeedback();
    return data;
  }
);

export const changeUpvote = createAsyncThunk(
  "change/upvote",
  async function (id, { getState, dispatch }) {
    const feedbacks = getState().feedbacks.feedbacks;

    const upvote = feedbacks.find((feedback) => `${feedback.id}` === `${id}`);

    let upvoteCount = null;

    if (upvote.isUpvoted) {
      upvoteCount = upvote.upvotes - 1;
    } else if (!upvote.isUpvoted) {
      upvoteCount = upvote.upvotes + 1;
    }

    dispatch(addUpvote({ id, upvoteCount }));
    changeFeedback(id, !upvote.isUpvoted, upvoteCount);
  }
);

export const addComment = createAsyncThunk(
  "add/comment",
  async function ({ id, comment }, { getState, dispatch }) {
    const commentedProduct = getState().feedbacks.feedbacks.find(
      (feedback) => +feedback.id === +id
    );

    const createdComment = {
      id: uuidv4(),
      content: comment,
      user: {
        image:
          "https://i2.wp.com/vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png?ssl=1",
        name: "You",
        username: "unnamed",
      },
    };

    dispatch(addNewComment({ comment, id, newComment: createdComment }));
    newComment(id, [...commentedProduct.comments, createdComment]);
  }
);

export const addReplyComment = createAsyncThunk(
  "feedback/addReplyComment",
  async function (
    { id, comment, repliedUser, repliedUserId },
    { getState, dispatch }
  ) {
    const checkId = (feedback) => `${feedback.id}` === `${id}`;
    const commentedProduct = getState().feedbacks.feedbacks.find(checkId);
    const repliedIndex = commentedProduct.comments?.findIndex(
      (comment) => `${comment.id}` === `${repliedUserId}`
    );

    if (repliedIndex !== -1) {
      const createdComment = {
        content: comment.replace("@" + repliedUser, "").trim(),
        id: uuidv4(),
        replyingTo: repliedUser,
        user: {
          image:
            "https://i2.wp.com/vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png?ssl=1",
          name: "You",
          username: "unnamed",
        },
      };

      const clonedComment = JSON.parse(
        JSON.stringify(commentedProduct.comments[repliedIndex])
      );
      clonedComment["replies"]
        ? clonedComment["replies"].push(createdComment)
        : (clonedComment["replies"] = [createdComment]);

      const withNewComment = [
        ...commentedProduct.comments.slice(0, repliedIndex),
        clonedComment,
        ...commentedProduct.comments.slice(repliedIndex + 1),
      ];

      dispatch(replyNewComment({ id, withNewComment }));
      replyComment(id, withNewComment);
    }
  }
);

export const addNewFeedback = createAsyncThunk(
  "add/upvote",
  async function ({ title, category, description }, { dispatch }) {
    const newFeedback = {
      id: uuidv4(),
      title,
      category,
      upvotes: 0,
      status: "suggestion",
      description,
      comments: [],
    };
    addFeedback(newFeedback);
    dispatch(appendFeedback(newFeedback));
  }
);

export const editFeedbackThunk = createAsyncThunk(
  "edit/feedback",
  async function (feedback) {
    editFeedback(feedback);
  }
);

export const deleteFeedbackThunk = createAsyncThunk(
  "delete/feedback",
  async function (id) {
    deleteFeedback(id);
  }
);

const name = "feedbacks";

const initialState = {
  loading: false,
  error: null,
  feedbacks: [],
  feedbacksStatus: [],
};

const feedbackSlice = createSlice({
  name,
  initialState,
  reducers: {
    addUpvote(state, action) {
      const currentFeedback = state.feedbacks.find(
        (feedback) => feedback.id === action.payload.id
      );

      currentFeedback.upvotes = action.payload.upvoteCount;
      currentFeedback.isUpvoted = !currentFeedback.isUpvoted;
    },
    appendFeedback(state, action) {
      state.feedbacks.push(action.payload);
    },
    sortFeedback(state, action) {
      const commentAccumulator = (n, current) =>
        (n += current.replies?.length || 1);
      switch (action.payload) {
        case 1: {
          state.feedbacks.sort((a, b) => b.upvotes - a.upvotes);
          break;
        }
        case 2: {
          state.feedbacks.sort((a, b) => a.upvotes - b.upvotes);
          break;
        }
        case 3: {
          state.feedbacks.sort(
            (a, b) =>
              b.comments?.reduce(commentAccumulator, 0) -
              a.comments?.reduce(commentAccumulator, 0)
          );
          break;
        }
        case 4: {
          state.feedbacks.sort(
            (a, b) =>
              a.comments?.reduce(commentAccumulator, 0) -
              b.comments?.reduce(commentAccumulator, 0)
          );
          break;
        }
        default:
          state.feedbacks.sort((a, b) => b.upvotes - a.upvotes);
      }
    },
    addNewComment(state, action) {
      const commented = state.feedbacks.find(
        (feedback) => +feedback.id === +action.payload.id
      );
      if (commented["comments"]) {
        commented["comments"].push(action.payload.newComment);
      } else {
        commented["comments"] = [action.payload.newComment];
      }
    },
    replyNewComment(state, action) {
      const currentComment = state.feedbacks.find(
        (product) => `${product.id}` === `${action.payload.id}`
      );
      currentComment.comments = action.payload.withNewComment;
    },
  },
  extraReducers: {
    [getFeedbacks.pending]: (state) => {
      state.loading = true;
    },
    [getFeedbacks.fulfilled]: (state, action) => {
      state.feedbacks = action.payload;
      state.loading = false;
    },
    [getFeedbacks.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [addNewFeedback.pending]: (state) => {
      state.loading = true;
    },
    [addNewFeedback.fulfilled]: (state) => {
      state.loading = false;
    },
    [addComment.pending]: (state) => {
      state.loading = false;
    },
    [addComment.fulfilled]: (state) => {
      state.loading = false;
    },
    [addComment.rejected]: (state, action) => {
      console.error(action.error.message);
      state.loading = false;
    },
    [addReplyComment.rejected]: (state, action) => {
      console.error(action.error.message);
      state.loading = false;
    },
    [addReplyComment.fulfilled]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  addUpvote,
  appendFeedback,
  sortFeedback,
  addNewComment,
  replyNewComment,
} = feedbackSlice.actions;
export default feedbackSlice.reducer;
