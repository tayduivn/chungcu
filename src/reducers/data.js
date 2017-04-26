import * as type from '../constants';

export default function data(state = {}, action) {
  switch (action.type) {
    case type.SET_DATA:
      const data = action.payload.value
      return {
        ...state,
        post: {
          ...state.post,
          value: data.getOnePost || {}
        },
        posts: {
          ...state.posts,
          value: data.getPosts || state.posts.value
        },
        newApartments: {
          ...state.newApartments,
          value: data.getNewApartments || state.newApartments.value
        }
      };
    default:
      return state;
  }
}
