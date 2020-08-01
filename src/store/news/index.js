import firebase from '~/plugins/firebase'

export const state = () => ({
  posts: [],
  univs: [],
  covid19: []
})

export const mutations = {
  setNews(state, posts) {
    state.posts = posts.posts
  },
  setUnivs(state, univs) {
    state.univs = univs.univs
  },
  setCovid19(state, covid19) {
    state.covid19 = covid19.covid19
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
  },
  async FETCH_COVID19({ commit, dispatch }) {
    const store = firebase.firestore()
    const covid19QuerySnapshot = await store.collection('covid-19').get()
    const newsQuerySnapshot = await store
      .collectionGroup('news')
      .orderBy('date', 'desc')
      .get()
    const covid19NewsId = covid19QuerySnapshot.docs.map((doc) => {
      return doc.data().newsId
    })
    if (covid19QuerySnapshot.empty || newsQuerySnapshot.empty) return
    const covid19 = newsQuerySnapshot.docs
      .filter((doc) => {
        return covid19NewsId.includes(doc.id)
      })
      .map((doc) => {
        return doc.data()
      })
    commit('setCovid19', { covid19 })
  }
}
