import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} from 'graphql'

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

// Define our user type, with two string fields; `id` and `name`
import GraphQLJSON from 'graphql-type-json';

export default new GraphQLObjectType({
  name: 'Apartment',
  description: 'Apartment object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },

    title: {
      type: GraphQLString
    },

    slug: {
      type: GraphQLString
    },

    category: {
      type: GraphQLString
    },

    coverUrl: {
      type: GraphQLString
    },

    price1: {
      type: GraphQLFloat
    },

    price2: {
      type: GraphQLFloat
    },

    rating: {
      type: GraphQLFloat
    },

    numRate: {
      type: GraphQLInt
    },

    body: {
      type: GraphQLString
    },

    view: {
      type: GraphQLInt
    },

    created_at: {
      type: GraphQLDateTime
    },
  })
});
