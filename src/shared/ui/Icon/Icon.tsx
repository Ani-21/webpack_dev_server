import React, { SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Icon = (props: IconProps) => {
  const { className = '', Svg } = props;
  return <Svg className={classNames(cls.Icon, {}, [className])} />;
};

export default Icon;
