import React from 'react';

export interface CommentProps {
  className?: string;
}

const Comment = (props: CommentProps) => {
  const { className } = props;

  return <div>Comment</div>;
};

export default Comment;
