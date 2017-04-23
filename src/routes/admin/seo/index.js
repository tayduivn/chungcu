/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import fetch from '../../../core/fetch';

const title = 'Dashboard';

export default {

  path: '/seo',

  async action({query}) {
    const {App, Seo } = await require('../AdminRequire')
    return {
      title,
      chunk: 'admin',
      disableSSR: true,
      component: <App
        name={title}
      >
        <Seo title={title} />
      </App>,
    };
  },
};
