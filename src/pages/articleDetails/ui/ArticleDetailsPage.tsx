import React, { memo, useEffect } from 'react';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/articles';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  const { id = '' } = useParams();

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
