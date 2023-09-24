import React, { useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/user';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
    //@ts-ignore
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title="Профиль" />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
              Редактировать
            </Button>
          ) : (
            <>
              <Button onClick={onCancelEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED}>
                Отменить
              </Button>
              <Button onClick={onSave} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                Сохранить
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePageHeader;
