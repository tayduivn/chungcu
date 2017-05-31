/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const title = 'Đăng nhập';

export default {

  path: '/login',

  async action() {
    const { Login } = await require('../AdminRequire')

    return {
      title,
      chunk: 'admin',
      disableSSR: true,
      component: <Login />
    };
  },
};
