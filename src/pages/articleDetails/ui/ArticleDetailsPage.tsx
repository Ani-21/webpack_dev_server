import React, { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className = '' } = props;
  return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>ArticleDetailsPage</div>;
};

export default memo(ArticleDetailsPage);
