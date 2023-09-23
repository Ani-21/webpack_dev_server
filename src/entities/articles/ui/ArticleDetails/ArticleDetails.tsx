import { fetchArticleById } from 'entities/articles/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/articles/model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from 'entities/articles/model/types/article';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Avatar from 'shared/ui/Avatar/Avatar';
import Icon from 'shared/ui/Icon/Icon';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import ArticleCodeBlock from '../ArticleCodeBlock/ArticleCodeBlock';
import ArticleImageBlock from '../ArticleImageBlock/ArticleImageBlock';
import ArticleTextBlock from '../ArticleTextBlock/ArticleTextBlock';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className = '', id } = props;
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const dispatch = useAppDispatch();

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlock key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlock key={block.id} className={cls.block} block={block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlock key={block.id} className={cls.block} block={block} />;
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={classNames(cls.avatar)} width={200} height={200} border={'50%'} />
        <Skeleton className={classNames(cls.title)} width={300} height={300} />
        <Skeleton className={classNames(cls.title)} width={600} height={24} />
        <Skeleton className={classNames(cls.title)} width={600} height={24} />
        <Skeleton className={classNames(cls.skeleton)} width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = <Text title="Что-то пошло не так" align={TextAlign.CENTER} />;
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar src={article?.data?.img} className={cls.avatar} />
        </div>
        <Text className={cls.title} title={article?.data?.title} size={TextSize.L} />
        <Text text={article?.data?.subtitle} />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.data?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={article?.data?.createdAt} />
        </div>
        {article?.data?.blocks.map(renderBlock)}
      </>
    );
  }

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <>
        <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
      </>
    </DynamicModuleLoader>
  );
});

export default ArticleDetails;
