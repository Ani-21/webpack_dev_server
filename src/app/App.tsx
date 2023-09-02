import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/theme';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/user';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuth());
  }, [dispatch]);

  return (
    <div className={classNames('app', { hovered: false, selected: true }, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
