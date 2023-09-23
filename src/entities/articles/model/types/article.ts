export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  title?: string;
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
  type: ArticleBlockType.CODE;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  title: string;
  src: string;
  type: ArticleBlockType.IMAGE;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export enum ArticleType {
  IT = 'IT',
  ECONOMICS = 'ECONOMICS',
  SCIENCE = 'SCIENCE',
}

export interface Article {
  id: string;
  title: string;
  subtitle: 'Что нового в JS за 2022 год?';
  img: string;
  views: 1022;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
