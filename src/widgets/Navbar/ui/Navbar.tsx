import { getUserAuthData, userActions } from 'entities/user';
import { LoginModal } from 'features/authByUsername';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, []);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handleLogout}>
          Выйти
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={handleClose} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpen}>
        Войти
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={handleClose} />
    </div>
  );
};
