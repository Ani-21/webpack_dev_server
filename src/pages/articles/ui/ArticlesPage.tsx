import React, { memo } from 'react';
import cls from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className = '' } = props;
  return <div className={classNames(cls.ArticlesPage, {}, [className])}>ArticlesPage</div>;
};

export default memo(ArticlesPage);
