import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggle = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggle}>
        Войти
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus quasi soluta tempora provident sequi
        illum repellendus fuga consequatur. Error recusandae ipsa voluptate iste, nobis nesciunt placeat animi aperiam
        sed!
      </Modal>
    </div>
  );
};
