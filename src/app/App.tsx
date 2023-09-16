import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getInitAuthData, userActions } from 'entities/user';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const init = useSelector(getInitAuthData);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', { hovered: false, selected: true }, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        {init && <AppRouter />}
      </div>
    </div>
  );
};

export default App;
