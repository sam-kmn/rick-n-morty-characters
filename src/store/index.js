import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {
      info: {},
      results: []
    },
    page: 1,
    liked: [],
  },
  mutations: {
    resetSearch(state) {
      state.search = ''
    },
    resetData(state, error) {
      state.data.info = {}
      state.data.results = []
      if (error) state.data.info = {error:true}
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
          results: response.data.characters.results
        }
        state.commit('setData', data)
      } else state.commit('resetData', true)
    },
    async fetchCharsByName(state, payload) {
      const Query = `
        query {
          characters(filter: {name: "${payload}"}) {
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
          results: response.data.characters.results
        }
        state.commit('setData', data)
      } else state.commit('resetData', true)
    },
    async fetchCharByID(state, payload){
      if (!payload) state.commit('resetData', true)
      else {
        const Query = `
        query {
          character(id: "${payload}") {
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
        `
        const res = await fetch('https://rickandmortyapi.com/graphql', {
          method: 'POST',
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            query: Query 
          })
        })
        const response = await res.json()
        if (!response.errors){
          const data = {
            info: {},
            results: response.data.character
          }
          state.commit('setData', data)
        } else state.commit('resetData', true)
      }
    },
    async fetchCharsByIDs(state) {
      if (!state.state.liked.length) state.commit('resetData', true)
      else{
        const Query = `
          query {
            charactersByIds(ids: [${state.state.liked}]) {
              image
              id
              name
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
            results: response.data.charactersByIds
          }
          state.commit('setData', data)
        } else state.commit('resetData', true)
      }
    },
  },
  modules: {
  },
  getters: {
    getPage(state) { return state.page },
    getData(state) { return state.data },
    getLiked(state) { return state.liked },
  }
})
