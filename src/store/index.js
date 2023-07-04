import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:
      [
        {
          "name": 'Животные 3D',
          'onclick': 'animals',
          "question": 'Какое это животное?',
          "questionTwoTitle":'Внимательно рассмотри животное и выбери внизу правильный ответ',
          'answer': [
            { 'src': '/models/dog.obj', name: "Собака" },
            { 'src': '/models/dinov.obj', name: "Динозавр" }
          ]

        }, {
          "name": 'Страны по флагам',
          'onclick': 'state',
          "question": 'Какой страны этот флаг?',
          "questionTwoTitle":'Внимательно рассмотри картинку и выбери внизу чей это флаг',
          'answer': [
            { 'src': '/state/av.png', name: "Австралия" },
            { 'src': '/state/avst.png', name: "Австрия" }
          ]

        }
        
      ]
    ,
    i:0,
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
