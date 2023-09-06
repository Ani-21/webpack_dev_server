import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.ReactNode;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    icon: <MainIcon />,
  },
  {
    path: RoutePath.about,
    text: 'О Сайте',
    icon: <AboutIcon />,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    icon: <ProfileIcon />,
  },
];