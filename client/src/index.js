import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <ChakraProvider toastOptions={{ defaultOptions: { position: 'top-right' } }}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </ReduxProvider>
);

