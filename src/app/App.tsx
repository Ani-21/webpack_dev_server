import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: false, selected: true }, [theme])}
    >
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};

export default App;
