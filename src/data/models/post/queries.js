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
  getPosts: {
    type: new GraphQLObjectType({
        name: 'getNews',
        description: 'getNews object',
        fields: () => ({
          page: {
            type: GraphQLInt
          },
          totalPage: {
            type: GraphQLInt
          },
          data: {
            type: new GraphQLList(type)
          }
        })
      }),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      resolve: model.getPosts
  },
  getOnePost: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOnePost
  },
};
