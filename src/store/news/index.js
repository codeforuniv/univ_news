import firebase from '~/plugins/firebase'

export const state = () => ({
  posts: []
})

export const mutations = {
  setNews(state, posts) {
    state.posts = posts.posts
  }
}

export const actions = {
  async FETCH_NEWS({ commit, dispatch }) {
    const store = firebase.firestore()
    const newsQuerySnapshot = await store
      .collection('news')
      .orderBy('date', 'desc')
      .get()
    if (newsQuerySnapshot.empty) return
    const posts = newsQuerySnapshot.docs.map((doc) => {
      return doc.data()
    })
    commit('setNews', { posts })
  }
}
