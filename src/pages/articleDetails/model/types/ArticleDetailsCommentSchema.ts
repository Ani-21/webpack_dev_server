import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '../../../../entities/comment/model/types/comment';

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
