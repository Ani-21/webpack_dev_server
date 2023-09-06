import { useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { SidebarItemsList as items } from 'widgets/Sidebar/model/items';
import SidebarItem from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {items.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={isCollapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
