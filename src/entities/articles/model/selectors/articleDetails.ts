import { StateSchema } from 'app/providers/store';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
