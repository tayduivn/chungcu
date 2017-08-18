/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

// import me from './queries/me';
import imageQueries from './models/image/queries';
import postQueries from './models/post/queries';
import productQueries from './models/product/queries';
import userQueries from './models/user/queries';
import settingQueries from './models/setting/queries';
import orderQueries from './models/order/queries';
import seoQueries from './models/seo/queries';
import apartmentQueries from './models/apartment/queries';
import categoryQueries from './models/category/queries';

// mutation
import settingMutation from './models/setting/mutations';
import postMutation from './models/post/mutations';


const { listImage } = imageQueries;
const { users } = userQueries;
const { setting } = settingQueries;
const { getOrders } = orderQueries;
const { getPosts, getOnePost, getAllPosts, getPostRelative } = postQueries;
const { getOneProduct, getProducts } = productQueries;
const { seo, allSeo } = seoQueries;
const { getApartments, getOneApartment, getApartmentsByCategory, getApartmentRelative } = apartmentQueries;
const { getCategories, getOneCategory } = categoryQueries;

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      setting,
      listImage,
      users,
      getPosts,
      getOnePost,
      getOneProduct,
      getProducts,
      getOrders,
      seo,
      allSeo,
      getApartments,
      getOneApartment,
      getCategories,
      getOneCategory,
      getApartmentsByCategory,
      getAllPosts,
      getApartmentRelative,
      getPostRelative
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: {
      // addUser: userMutations.addUser,
      // updateUser: userMutations.updateUser
      updateSetting: settingMutation.update,
      newPost: postMutation.newPost,
    },
  }),
});

export default schema;
