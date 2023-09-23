import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlock.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
  const { className = '', block } = props;
  const { title, src } = block;

  return (
    <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
      <img src={src} className={cls.img} alt={title} />
      {title && <Text text={title} align={TextAlign.CENTER} />}
    </div>
  );
});

export default ArticleImageBlock;
