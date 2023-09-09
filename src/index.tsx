import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme';
import { ErrorBoundary } from 'app/providers/error.boundary';
import App from './app/App';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/store/ui/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
