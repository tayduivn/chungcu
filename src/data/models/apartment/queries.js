import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime,
} from 'graphql-iso-date';

import type from './type';
import model from './schema';

export default {
  getOneApartment: {
    type,
    args: {
      slug: {
        type: GraphQLString,
      },
    },
    resolve: model.getOneApartment,
  },
  getApartments: {
    type: new GraphQLList(type),
    args: {
      type: {
        type: GraphQLString,
      },
    },
    resolve: model.getApartments,
  },
  getApartmentsByCategory: {
    type: new GraphQLList(type),
    args: {
      category: {
        type: GraphQLString,
      },
    },
    resolve: model.getApartmentsByCategory,
  },
  getApartmentRelative: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString,
      },
    },
    resolve: model.getApartmentRelative,
  },
};
