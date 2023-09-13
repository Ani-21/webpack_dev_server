import { StateSchema } from 'app/providers/store/config/StateSchema';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

describe('getProfileForm', () => {
  test('should return form', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
