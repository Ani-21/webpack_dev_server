import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getProfileData } from './getProfileData';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

describe('getProfileData', () => {
  test('should return user data', () => {
    const data = {
      first: 'Ani',
      lastname: 'Kvikvinia',
      age: 22,
      currency: Currency.RUS,
      country: Country.RUSSIA,
      city: 'St.Petersburg',
      username: 'ani',
      avatar: '',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
