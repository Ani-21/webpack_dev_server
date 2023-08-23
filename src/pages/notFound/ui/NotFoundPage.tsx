import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.NotFoundPage)}>Page does not exist</div>
  );
};
