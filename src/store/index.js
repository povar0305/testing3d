import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:
      [
        {
          "name": 'животные',
          'onclick': 'animals',
          "question": 'Какое это животное?',
          'answer': [
            { 'src': '/models/dog.obj', name: "Собака" },
            { 'src': '/models/dinov.obj', name: "Динозавр" }
          ]

        }, {
          "name": 'животные2',
          'onclick': 'animals2',
          "question": 'Какое это животное?111111111111',
          'answer': [
            { 'src': '/models/dog.obj', name: "Собака222222222" },
            { 'src': '/models/dinov.obj', name: "Динозавр11111111111111" }
          ]

        }
        
      ]
    ,
    selectedTheme: null,
    selectedQ: {}
  },
  getters: {
    SELECTED_THEME: state => {
      if (state.selectedTheme != null) {
        return state.selectedTheme;
      }
    },
  },
  mutations: {
    SET_SELECTED_THEME: (state, theme) => {
      state.selectedTheme = theme;

    },
    SET_SELECT_Q: (state, theme) => {
      state.questions.forEach(function (item) {
        if (item.onclick == theme) {
          state.selectedQ = item;
        }
      });
    }
  },
  actions: {

  },
  modules: {
  }
})
