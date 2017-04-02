import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home/index';
import { CatalogRoutes } from './pages/catalog/index';
import ErrorPage from './pages/error/index';


export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />

            { HomeRoutes }
            { CatalogRoutes }

        <Route path='*' component={ ErrorPage } />
    </Route>
);
