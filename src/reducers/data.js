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
        chothue: {
          ...state.chothue,
          value: data.chothue || state.chothue.value
        },
        muabankhut: {
          ...state.muabankhut,
          value: data.muabankhut || state.muabankhut.value
        },
        muabanparkhill: {
          ...state.muabanparkhill,
          value: data.muabanparkhill || state.muabanparkhill.value
        },
        danhsachcanho: {
          ...state.danhsachcanho,
          value: data.danhsachcanho || state.danhsachcanho.value
        },
        canho: {
          ...state.canho,
          value: data.canho || state.canho.value
        },
        thutuctrangchu: {
          ...state.thutuctrangchu,
          value: data.thutuctrangchu || state.thutuctrangchu.value
        },
        danhsachthutuc: {
          ...state.danhsachthutuc,
          value: data.danhsachthutuc || state.danhsachthutuc.value
        },
        thutuc: {
          ...state.thutuc,
          value: data.thutuc || state.thutuc.value
        },
        gioithieu: {
          ...state.gioithieu,
          value: data.gioithieu || state.gioithieu.value
        }
      };
    default:
      return state;
  }
}
