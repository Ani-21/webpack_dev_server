import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlock.module.scss';
import { memo } from 'react';
import Code from 'shared/ui/Code/Code';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
  const { className = '', block } = props;

  return (
    <div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});

export default ArticleCodeBlock;
