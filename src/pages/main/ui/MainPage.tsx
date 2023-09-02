import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <h1>Главная страница</h1>
      <Input placeholder="Введите текст" value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
