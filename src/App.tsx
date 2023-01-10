import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { persistStore } from 'redux-persist';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './lib/queryClient';
import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PersistGate>

        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
