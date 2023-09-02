import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autoFocus placeholder="Введите логин" className={cls.input} />
      <Input placeholder="Введите пароль" className={cls.input} />
      <Button className={cls.loginBtn}>Войти</Button>
    </div>
  );
};
