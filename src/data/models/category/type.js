import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
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
  name: 'Category',
  description: 'Category object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },

    slug: {
      type: new GraphQLNonNull(GraphQLString)
    },

    coverUrl: {
      type: new GraphQLNonNull(GraphQLString)
    },

    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    created_at: {
      type: new GraphQLNonNull(GraphQLDateTime)
    },
  })
});
