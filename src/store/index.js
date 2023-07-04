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
          "questionTwoTitle": 'Внимательно рассмотри животное и выбери внизу правильный ответ',
          'answer': [
            { 'src': '/models/dog.obj', name: "Собака" },
            { 'src': '/models/dinov.obj', name: "Динозавр" }
          ]

        }, {
          "name": 'Страны по флагам',
          'onclick': 'state',
          "question": 'Какой страны этот флаг?',
          "questionTwoTitle": 'Внимательно рассмотри картинку и выбери внизу чей это флаг',
          'answer': [
            { 'src': '/state/afgan.png', name: "Авганистан" },
            { 'src': '/state/aland.png', name: "Аландские острова" },
            { 'src': '/state/alban.png', name: "Албания" },
            { 'src': '/state/alzch.png', name: "Алжир" },
            { 'src': '/state/amer.png', name: "Американское Самоа" },
            { 'src': '/state/andor.png', name: "Андорра" },
            { 'src': '/state/angil.png', name: "Ангилья" },
            { 'src': '/state/angola.png', name: "Ангола" },
            { 'src': '/state/antar.png', name: "Антигуа и Барбуда" },
            { 'src': '/state/antig.png', name: "Аргентина" },
            { 'src': '/state/armen.png', name: "Армения" },
            { 'src': '/state/arub.png', name: "Аруба" },
            { 'src': '/state/av.png', name: "????????????????" },
            { 'src': '/state/avst.png', name: "Австралия" },
            { 'src': '/state/azer.png', name: "Азербайджан" },
            { 'src': '/state/bach.png', name: "Бахрейн" },
            { 'src': '/state/bagam.png', name: "Багамские острова" },
            { 'src': '/state/bangl.png', name: "Бангладеш" },
            { 'src': '/state/barbar.png', name: "Барбадос" },
            { 'src': '/state/bel.png', name: "Белорусь" },
            { 'src': '/state/belg.png', name: "Бельгия" },
            { 'src': '/state/belz.png', name: "Белиз" },
            { 'src': '/state/beni.png', name: "Бенин" },
            { 'src': '/state/berm.png', name: "Бермуды" },
            { 'src': '/state/bolg.png', name: "Болгария" },
            { 'src': '/state/boli.png', name: "Боливия" },
            { 'src': '/state/bosn.png', name: "Босния и Герцеговина" },
            { 'src': '/state/bots.png', name: "Боцвана" },
            { 'src': '/state/braz.png', name: "Бразилия" },
            { 'src': '/state/brun.png', name: "Бруней" },
            { 'src': '/state/butan.png', name: "Бутан" },
            { 'src': '/state/byrk.png', name: "Буркина – Фасо" },
            { 'src': '/state/byrynd.png', name: "Бурунди" },
          ]

        }

      ]
    ,
    i: 0,
    selectedTheme: null,
    selectedQ: {}
  },
  getters: {
    SELECTED_THEME: state => {
      if (state.selectedTheme != null) {
        return state.selectedTheme;
      }
    },
    VARIANTS_ANSWER: state => {
      let resultAnswer = [];
      let i = 0;
      let count = 12;
      if (state.selectedQ.answer.length < 12) {
        count = state.selectedQ.answer.length;
      }
      while (i < count) { // выводит 0, затем 1, затем 2
        resultAnswer.push(state.selectedQ.answer[Math.floor(Math.random() * count)])
        console.log(Math.floor(Math.random() * count))

        i++;
      }
      // TODO добавить правильный вариант и перемешать массив
      resultAnswer = resultAnswer.filter((v, i, arr) =>  arr.indexOf(v) == i);

      return resultAnswer;
    }
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
