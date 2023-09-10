import { CSSProperties, useMemo } from 'react';
import { Mode, classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className = '', src, size, alt } = props;

  const mods: Mode = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return <img alt={alt} style={styles} src={src} className={classNames(cls.Avatar, mods, [className])} />;
};

export default Avatar;
