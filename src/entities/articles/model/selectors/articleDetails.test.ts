import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('get article data', () => {
  test('should return user data', () => {
    const data = {
      id: '1',
      subtitle: 'text',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        //@ts-ignore
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {};
    const errorState: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(errorState);
  });

  test('should return is loading true', () => {
    const state: DeepPartial<StateSchema> = {};
    const isLoading: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(isLoading);
  });
});
