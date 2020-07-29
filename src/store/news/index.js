import firebase from '~/plugins/firebase'

export const state = () => ({
  posts: [],
  univs: []
})

export const mutations = {
  setNews(state, posts) {
    state.posts = posts.posts
  },
  setUnivs(state, univs) {
    state.univs = univs.univs
  }
}

export const actions = {
  async FETCH_NEWS({ commit, dispatch }) {
    const store = firebase.firestore()
    const newsQuerySnapshot = await store
      .collectionGroup('news')
      .orderBy('date', 'desc')
      .get()
    if (newsQuerySnapshot.empty) return
    const posts = newsQuerySnapshot.docs.map((doc) => {
      return doc.data()
    })
    commit('setNews', { posts })
  },
  async FETCH_UNIVERSITY({ commit, dispatch }) {
    const store = firebase.firestore()
    const univQuerySnapshot = await store.collection('university').get()
    if (univQuerySnapshot.empty) return
    const univs = univQuerySnapshot.docs.map((doc) => {
      return doc.data()
    })
    commit('setUnivs', { univs })
  }
}
