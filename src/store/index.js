import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {
      info: {},
      characters: {}
    },
    search: '',
    page: 1,
    liked: [],
  },
  mutations: {
    resetSearch(state) {
      state.search = ''
    },
    resetData(state) {
      state.data.info = {}
      state.data.characters = {}
    },
    setSearch(state, payload) { state.search = payload },
    setPage(state, payload) { state.page = payload },
    setData(state, payload) { state.data = payload },
  },
  actions: {
    async fetchChars(state) {
      const Query = `
        query {
          characters(page: ${state.state.page}) {
            info {
              pages
              prev
              next
              count
            }
            results{
              image
              id
              name
              gender
              species
            }
          }
        }
      `

      const res = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          query: Query
        })
      })

      const response = await res.json()

      if (!response.errors) {
        const data = {
          info: response.data.characters.info,
          characters: response.data.characters.results
        }
        state.commit('setData', data)
      } else state.commit('resetData')
      
    },
    async fetchCharsByName(state) {
      const Query = `
        query {
          characters(filter: {name: "${state.state.search.input}"}) {
            info {
              pages
              prev
              next
              count
            }
            results{
              image
              id
              name
              gender
              species
              episode{
                episode
              }
            }
          }
        }
      `
      const res = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          query: Query
        })
      })

      const response = await res.json()

      if (!response.errors) {
        const data = {
          info: response.data.characters.info,
          characters: response.data.characters.results
        }
        state.commit('setData', data)
      } else state.commit('resetData')
    },
    async fetchCharsByIDs(state) {
      const Query = `
        query {
          charactersByIds(ids: [${state.state.liked}]) {
            image
            id
            name
            gender
            species
          }
        }
      `
      const res = await fetch('https://rickandmortyapi.com/graphql', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          query: Query
        })
      })

      const response = await res.json()

      if (!response.errors) {
        const data = {
          info: {},
          characters: response.data.charactersByIds
        }
        state.commit('setData', data)
      } else state.commit('resetData')
    },
  },
  modules: {
  },
  getters: {
    getSearch(state) { return state.search },
    getPage(state) { return state.page },
    getData(state) { return state.data },
    getLiked(state) { return state.liked },
  }
})
