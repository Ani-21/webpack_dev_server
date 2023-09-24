import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { getArticleDetailsData } from 'entities/articles';
import { Comment } from 'entities/comment';
import { User, getUserAuthData } from 'entities/user';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommenForArticle',
  // @ts-ignore
  async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no neccessary data was provided');
    }

    try {
      const response = await extra.api.post<User>('/comments', {
        userId: userData.id,
        articleId: article.data?.id,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.data?.id ?? ''));

      return response.data;
    } catch (err) {
      return rejectWithValue('Не отправить комментарий');
    }
  }
);
