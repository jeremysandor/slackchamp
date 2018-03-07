/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import VenuePage from 'containers/VenuePage/Loadable';
import TablePage from 'containers/TablePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Trust the Hinkie"
        defaultTitle="Trust the Hinkie"
      >
        <meta name="description" content="Trust it" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/venues" component={VenuePage} />
        <Route path="/admin" component={TablePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
