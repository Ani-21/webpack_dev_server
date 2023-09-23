import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlock.module.scss';
import { memo } from 'react';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
  const { className = '', block } = props;
  const { title, paragraphs } = block;

  return (
    <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
      {title && <Text title={title} className={cls.title} />}
      {paragraphs &&
        paragraphs.map((paragraph, index) => <Text key={index} text={paragraph} className={cls.paragraph} />)}
    </div>
  );
});

export default ArticleTextBlock;
