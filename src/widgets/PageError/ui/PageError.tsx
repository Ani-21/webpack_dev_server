import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PageErrorProps) => {
  const { className } = props;

  const handleReload = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError)}>
      <h1>Произошла Ошибка</h1>
      <Button onClick={handleReload}>Обновить страницу</Button>
    </div>
  );
};
