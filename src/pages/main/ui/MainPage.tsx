import { BugButton } from 'app/providers/error.boundary/ui/BugButton';
import { Counter } from 'entities/counter';

const MainPage = () => (
  <div>
    <h1>Главная страница</h1>
    <Counter />
  </div>
);

export default MainPage;
