import { Comment } from './comment';

export interface CommentSchema {
  isLoading?: boolean;
  error?: string;
  data: Comment;
}
