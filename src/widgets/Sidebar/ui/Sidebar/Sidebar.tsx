import { useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
