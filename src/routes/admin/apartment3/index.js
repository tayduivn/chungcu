/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const title = 'Căn Hộ Mua Bán & Chuyển Nhượng ';

export default {

  path: '/apartment3',

  async action({query}) {
    if(!query.v){
      return { redirect: '/admin/apartment3?v=list' };
    }
    const {App, EditApartment3 , ListApartment3 } = await require('../AdminRequire')
    let component = {}

    if(query.v === 'list'){
      component = <App
          name={title}
        >
          <ListApartment3 title={title} />
        </App>
    } else if(query.v === 'add'){
      component = <App
        name={title}
      >
        <EditApartment3 mode="add" isEdit={false} />
      </App>
    } else if(query.slug && query.v === 'edit'){
      component = <App
        name={title}
      >
        <EditApartment3 mode="edit" isEdit={true} slug={query.slug} />
      </App>
    } else if (query.v !== 'list') {
      return { redirect: '/admin/apartment3?v=list' };
    }

    return {
      title,
      chunk: 'admin',
      disableSSR: true,
      component,
    };
  },
};
