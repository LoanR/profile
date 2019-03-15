import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pageParts: [],
    partIndex: 0,
    cardIndex: 0,
    showBoard: true,
    showCard: true,
    showPartLinks: true
  },
  mutations: {
    setPageContent (state, newContent) {
      state.pageParts = newContent
    },
    setDisplayedPartIndex (state, newPartIndex) {
      state.partIndex = newPartIndex
    },
    setDisplayedCardIndex (state, newCardIndex) {
      state.cardIndex = newCardIndex
    },
    hideBoard (state) {
      state.showBoard = false
    },
    displayBoard (state) {
      state.showBoard = true
    },
    hideCard (state) {
      state.showCard = false
    },
    displayCard (state) {
      state.showCard = true
    },
    hidePartLinks (state) {
      state.showPartLinks = false
    },
    displayPartLinks (state) {
      state.showPartLinks = true
    }
  },
  actions: {
    hideFromMainMenuClick (context) {
      context.commit('hideBoard')
      context.commit('hideCard')
      context.commit('hidePartLinks')
    },
    hideFromSecondaryMenuClick (context) {
      context.commit('hideBoard')
      context.commit('hideCard')
    },
    displayEverything (context) {
      context.commit('displayBoard')
      context.commit('displayCard')
      context.commit('displayPartLinks')
    }
  },
  getters: {
    currentPagePart: state => {
      return state.pageParts[state.partIndex]
    },
    currentCard: state => {
      return state.pageParts[state.partIndex].cards[state.cardIndex]
    }
  }
})

export default store
