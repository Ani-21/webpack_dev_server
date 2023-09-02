import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    //@ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title="Авторизация" />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input autoFocus placeholder="Введите логин" className={cls.input} onChange={onChangeUsername} value={username} />
      <Input placeholder="Введите пароль" className={cls.input} onChange={onChangePassword} value={password} />
      <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
        Войти
      </Button>
    </div>
  );
});
