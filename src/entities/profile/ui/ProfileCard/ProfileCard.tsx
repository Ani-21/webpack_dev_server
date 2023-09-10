import { Currency, CurrencySelect } from 'entities/currency';
import { Profile } from 'entities/profile/model/types/profile';
import { Mode, classNames } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { Country, CountrySelect } from 'entities/country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (currency?: Country) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
  const {
    className = '',
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const mods: Mode = {
    [cls.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title="Прооизошла ошибка"
          text="Попробуйте перезагрузить страницу"
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          onChange={onChangeFirstname}
          value={data?.first}
          placeholder="Ваше имя"
          className={cls.input}
          readonly={readonly}
        />
        <Input
          onChange={onChangeLastname}
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={cls.input}
          readonly={readonly}
        />
        <Input
          onChange={onChangeAge}
          value={data?.age}
          placeholder="Ваш возраст"
          className={cls.input}
          readonly={readonly}
        />
        <Input
          onChange={onChangeCity}
          value={data?.city}
          placeholder="Ваш город"
          className={cls.input}
          readonly={readonly}
        />
        <Input
          onChange={onChangeUsername}
          value={data?.username}
          placeholder="Ваше имя"
          className={cls.input}
          readonly={readonly}
        />
        <Input
          onChange={onChangeAvatar}
          value={data?.avatar}
          placeholder="Ваш аватар"
          className={cls.input}
          readonly={readonly}
        />
        <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
      </div>
    </div>
  );
};

export default ProfileCard;
