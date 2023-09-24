import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList = (props: CommentListProps) => {
  const { className = '', comments, isLoading } = props;

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment} />
        ))
      ) : (
        <Text title="Комментарии не добавлены" />
      )}
    </div>
  );
};

export default CommentList;
