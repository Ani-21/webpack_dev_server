import { ChangeEvent, memo, useMemo } from 'react';
import { Mode, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value?: string;
  content?: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select = memo((props: SelectProps) => {
  const { className = '', label, options, onChange, value, readonly } = props;

  const mods: Mode = {};

  const optionList = useMemo(() => {
    return options?.map((item) => (
      <option label={item.value} className={cls.option} key={item.value}>
        {item.content}
      </option>
    ));
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={cls.select} name={label} onChange={onChangeHandler} value={value}>
        {optionList}
      </select>
    </div>
  );
});

export default Select;
