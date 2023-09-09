import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/profile/model/selectors/getProfileError/gerProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [])}>
      <div className={cls.header}>
        <Text title="Профиль" />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          Редактировать
        </Button>
      </div>
      <div className={cls.body}>
        <Input placeholder="Ваше имя" className={cls.input} />
        <Input placeholder="Ваша фамилия" className={cls.input} />
      </div>
    </div>
  );
};

export default ProfileCard;
