/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import Layout from '../../components/Layout';

const title = 'Admin Page';
const isAdmin = false;

export default {

  path: '/admin',
  children : [
    require('./dashboard').default,
    require('./library').default,
    require('./setting').default,
    require('./apartment').default,
    require('./apartment2').default,
    require('./apartment3').default,
    require('./category').default,
    require('./login').default,
    // require('./editor').default,
    require('./news').default,
    require('./monngon').default,
    require('./product').default,
    require('./seo').default,
  ],
  async action({store, next, url}) {
    let user = store.getState().user
    if (user && url === '/admin/login') {
      return { redirect: '/admin' };
    }
    if (!user && url !== '/admin/login') {
      return { redirect: '/admin/login' };
    }
    const route = await next();
    // Provide default values for title, description etc.
    route.title = `${route.title || 'Amdmin Page'}`;
    return route;
  },

};
