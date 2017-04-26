import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import type from './type'
import model from './schema'

export default {
  getOneApartment: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOneApartment
  },
  getApartments: {
    type: new GraphQLList(type),
    resolve: model.getApartments
  },
  getNewApartments: {
    type: new GraphQLList(type),
    resolve: model.getNewApartments
  },
};
