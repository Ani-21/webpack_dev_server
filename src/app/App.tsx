import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
