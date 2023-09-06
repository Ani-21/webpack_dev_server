import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

export interface ProfilePageProps {}

const ProfilePage = () => {
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <h1>Профиль страница</h1>
      <Input placeholder="Введите текст" value={value} onChange={onChange} />
    </div>
  );
};

export default ProfilePage;
