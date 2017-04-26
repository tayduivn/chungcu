/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const title = 'Căn Hộ Cho Thuê';

export default {

  path: '/apartment2',

  async action({query}) {
    if(!query.v){
      return { redirect: '/admin/apartment2?v=list' };
    }
    const {App, EditApartment2 , ListApartment2 } = await require('../AdminRequire')
    let component = {}

    if(query.v === 'list'){
      component = <App
          name={title}
        >
          <ListApartment2 title={title} />
        </App>
    } else if(query.v === 'add'){
      component = <App
        name={title}
      >
        <EditApartment2 mode="add" isEdit={false} />
      </App>
    } else if(query.slug && query.v === 'edit'){
      component = <App
        name={title}
      >
        <EditApartment2 mode="edit" isEdit={true} slug={query.slug} />
      </App>
    } else if (query.v !== 'list') {
      return { redirect: '/admin/apartment2?v=list' };
    }

    return {
      title,
      chunk: 'admin',
      disableSSR: true,
      component,
    };
  },
};
