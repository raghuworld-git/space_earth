import React from 'react';

import LandingPage from './LandingPage';
import HeaderContainer from './HeaderContainer';
import LaunchContainer from './LaunchContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';



const App = () => {

  const queryClient = new QueryClient();


  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/launch/:id'>
              <LaunchContainer />
            </Route>
          </Switch>
        </QueryClientProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
