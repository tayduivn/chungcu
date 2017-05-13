import React from 'react';
import View from './View';
import fetch from '../../core/fetch';
import needFetch from '../../core/needFetch';
import Layout from '../../components/Layout';
import { setData } from '../../actions/data';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default {
  path: '/can-ho/:slug',
  async action({ store, params, path }) {
    // process.env.BROWSER
    let seo = {}

    if(!process.env.BROWSER || !store.getState().setting.ssr || (process.env.BROWSER && needFetch())) {
      store.dispatch(showLoading())
      const resp = await fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: '{seo(url: "'+ path +'"){url,title,description,og_title,og_image,og_description},canho:getOneApartment(slug:"' + params.slug + '"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at}, canhotuongtu:getApartmentRelative(slug:"' + params.slug + '"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at} }',
        }),
        credentials: 'include',
      });

      const {data} = await resp.json();
      seo = data.seo || {}
      if (!data) throw new Error('Failed to load the news feed.');
      store.dispatch(setData(data))
      store.dispatch(hideLoading())
    }

    return {
      title: seo.title || 'Trang chủ',
      description: seo.description || '',
      seo: seo,
      component: <Layout><View data={store.getState().data} /></Layout>,
    };
  },

};
