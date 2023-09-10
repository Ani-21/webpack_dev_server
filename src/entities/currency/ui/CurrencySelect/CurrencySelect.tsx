import { Currency } from 'entities/currency';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';

export interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.RUS, value: Currency.RUS },
  { content: Currency.USD, value: Currency.USD },
];

const CurrencySelect = (props: CurrencySelectProps) => {
  const { className = '', value, onChange, readonly } = props;

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Currency);
    }
  }, []);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={'Укажите валюту'}
      options={options}
      onChange={onChangeHandler}
      readonly={readonly}
      value={value}
    />
  );
};

export default CurrencySelect;
