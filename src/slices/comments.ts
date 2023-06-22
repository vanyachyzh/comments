import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../types/Comment";
import {
  addCommentToServer,
  deleteCommentFromServer,
  getAllComments,
} from "../api/api";
import { generateRandomNumber } from "../utils/generateRandomNumber";

export const getComments = createAsyncThunk("comments/fetch", () =>
  getAllComments()
);

export const addComment = createAsyncThunk("comments/add", (body: string) =>
  addCommentToServer(body)
);

export const deleteComment = createAsyncThunk(
  "comments/delete",
  (comment: Comment) => deleteCommentFromServer(comment)
);

type CommentsState = {
  comments: Comment[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  hasError: false,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        getComments.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.comments = action.payload;
          state.isLoading = false;
        }
      )

      .addCase(getComments.rejected, (state) => {
        state.hasError = true;
      })

      .addCase(
        addComment.fulfilled,
        (state, action: PayloadAction<Comment>) => {
          state.comments = [
            ...state.comments,
            {
              ...action.payload,
              id: action.payload.id + generateRandomNumber(),
            },
          ];
        }
      )

      .addCase(addComment.rejected, (state) => {
        state.hasError = true;
      })

      .addCase(
        deleteComment.fulfilled,
        (state, action: PayloadAction<Comment>) => {
          state.comments = state.comments.filter(
            (comment) => comment.id !== action.payload.id
          );
        }
      )

      .addCase(deleteComment.rejected, (state) => {
        state.hasError = true;
      }),
});

export default commentSlice.reducer;
