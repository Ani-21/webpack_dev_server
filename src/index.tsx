import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme';
import { ErrorBoundary } from 'app/providers/error.boundary';
import App from './app/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
