import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Index from './routes/Index';
import Package from './routes/Package';

import '@fontsource-variable/inter';
import '@fontsource-variable/roboto-mono';

const client = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index />} />
      <Route path='/packages/*' element={<Package />} />
    </>
  )
);

const primaryFont = 'Inter Variable';
const theme = extendTheme({
  fonts: {
    body: primaryFont,
    heading: primaryFont,
    mono: 'Roboto Mono Variable'
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode >,
);
