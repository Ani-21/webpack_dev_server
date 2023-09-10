import React, { useCallback } from 'react';
import { Country } from '../model/types/country';
import Select from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';

export interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { content: Country.RUSSIA, value: Country.RUSSIA },
  { content: Country.AMERICA, value: Country.AMERICA },
  { content: Country.GERMANY, value: Country.GERMANY },
];

const CountrySelect = (props: CountrySelectProps) => {
  const { className = '', onChange, value, readonly } = props;

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Country);
    }
  }, []);

  return (
    <Select
      className={classNames('', {}, [className])}
      label="Укажите страну"
      options={options}
      onChange={onChangeHandler}
      readonly={readonly}
      value={value}
    />
  );
};

export default CountrySelect;
