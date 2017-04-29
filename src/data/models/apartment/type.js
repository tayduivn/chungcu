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
      type: new GraphQLNonNull(GraphQLString)
    },

    slug: {
      type: new GraphQLNonNull(GraphQLString)
    },

    category: {
      type: new GraphQLNonNull(GraphQLString)
    },

    coverUrl: {
      type: new GraphQLNonNull(GraphQLString)
    },

    price1: {
      type: new GraphQLNonNull(GraphQLInt)
    },

    price2: {
      type: new GraphQLNonNull(GraphQLInt)
    },

    rating: {
      type: new GraphQLNonNull(GraphQLFloat)
    },

    numRate: {
      type: new GraphQLNonNull(GraphQLInt)
    },

    body: {
      type: new GraphQLNonNull(GraphQLString)
    },

    view: {
      type: new GraphQLNonNull(GraphQLInt)
    },

    created_at: {
      type: new GraphQLNonNull(GraphQLDateTime)
    },
  })
});
