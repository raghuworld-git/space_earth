import React from 'react';

import LandingPage from './LandingPage';
import HeaderContainer from './HeaderContainer';
import LaunchContainer from './LaunchContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import AgencyContainer from './AgencyContainer';
import LaunchesList from './LaunchesList';



const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/launch/:slug'>
              <LaunchContainer />
            </Route>
            <Route exact path='/agency/:id'>
              <AgencyContainer />
            </Route>
            <Route exact path='/launches/:type(upcoming|previous)'>
              <LaunchesList />
            </Route>
            <Route>
              Page is under construction. Please come back later.
            </Route>
          </Switch>
        </QueryClientProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
