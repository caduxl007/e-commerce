import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './lib/queryClient';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
