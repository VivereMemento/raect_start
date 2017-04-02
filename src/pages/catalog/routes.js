import React from 'react';
import { Route } from 'react-router';
import Catalog from './catalog';

export default (
    <Route>
        <Route component={ Catalog } path={ Catalog.path } />
    </Route>
);
