import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: [
      {
        id: 1,
        title: 'Restauracja u Agaty',
        description: 'Agata ma najlepsze obiadku w całym kraju, a nawet na świecie!',
        typeId: [1, 3],
        image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        rating: {
          score: 5,
          count: 14257
        }
      },
      {
        id: 2,
        title: 'Restauracja u Andrzeja',
        description: 'U Andrzeja zasmakujesz prawdziwej dziczyzny!',
        image: 'https://dummyimage.com/300x251',
        typeId: [1],
        rating: {
          score: 4.2,
          count: 452
        }
      },
      {
        id: 3,
        title: 'Restauracja u Wieśka',
        description: 'Może masz ochotę na kuchnie Gruzińską? Wieśiek zna się na niej!',
        image: 'https://dummyimage.com/300x251',
        typeId: [2],
        rating: {
          score: 3.2,
          count: 643
        }
      },
      {
        id: 4,
        title: 'Restauracja u Wieśka',
        description: 'Może masz ochotę na kuchnie Gruzińską? Wieśiek zna się na niej!',
        image: 'https://dummyimage.com/300x251',
        typeId: [2],
        rating: {
          score: 3.2,
          count: 643
        }
      }
    ],
    restaurantCategories: [
      {
        id: 1,
        name: 'Polska'
      },
      {
        id: 2,
        name: 'Gruzińska'
      },
      {
        id: 3,
        name: 'Włoska'
      }
    ]
  },
  mutations: {
    addRestaurant(state, newRestaurants) {
      state.restaurants = newRestaurants
    }
  },
  actions: {
    addRestaurant({ commit, state }, restaurant) {
      commit('addRestaurant', [
        ...state.restaurants,
        {
          id: Date.now(),
          rating: {
            score: 0,
            count: 0
          },
          ...restaurant
        }
      ])
    }
  },
  modules: {
  }
})
