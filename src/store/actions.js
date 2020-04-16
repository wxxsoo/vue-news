import {
  fetchUserInfo, fetchCommentItem, fetchList,
  // fetchNewsList,
  // fetchJobsList,
  // fetchAskList,
} from "../api/index.js";

export default {
  //promise
  // FETCH_NEWS(context) {
  //   fetchNewsList().then(response => {
  //     context.commit('SET_NEWS', response.data)
  //   }).catch(error => {
  //     console.log(error)
  //   });
  // },
  //async
  // async FETCH_NEWS(context) {
  //   const response = await fetchNewsList();
  //   context.commit('SET_NEWS', response.data)
  //   return response
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList().then(({ data }) => {
  //     commit('SET_JOBS', data)
  //   }).catch(error => {
  //     console.log(error)
  //   });
  // },
  // FETCH_ASKS({ commit }) {
  //   fetchAskList().then(({ data }) => {
  //     commit('SET_ASK', data)
  //   }).catch(error => {
  //     console.log(error)
  //   });
  // },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name).then(({ data }) => {
      commit('SET_USER', data)
    }).catch(error => {
      console.log(error)
    });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id).then(({ data }) => {
      commit('SET_ITEM', data)
    }).catch(error => {
      console.log(error)
    });
  },
  // promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName).then(response => {
  //     commit('SET_LIST', response.data)
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }
  // async
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data)
    return response;
  }
}