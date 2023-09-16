import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  //@ts-ignore
  async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
    });
  }
);
