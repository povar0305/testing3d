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
            { 'src': '/state/av.png', name: "Австралия" },
            { 'src': '/state/avst.png', name: "Австрия" },
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
            { 'src': '/state/centerafr.png', name: "Бурунди" },
            { 'src': '/state/chex.png', name: "Бурунди" },
            { 'src': '/state/chil.png', name: "Бурунди" },
            { 'src': '/state/cvaz.png', name: "Бурунди" },
            { 'src': '/state/dan.png', name: "Бурунди" },
            { 'src': '/state/dieg.png', name: "Бурунди" },
            { 'src': '/state/dom.png', name: "Бурунди" },
            { 'src': '/state/domr.png', name: "Бурунди" },
            { 'src': '/state/dzchib.png', name: "Бурунди" },
            { 'src': '/state/egip.png', name: "Бурунди" },
            { 'src': '/state/darer.png', name: "Бурунди" },
            { 'src': '/state/fidg.png', name: "Бурунди" },
            { 'src': '/state/filip.png', name: "Бурунди" },
            { 'src': '/state/fin.png', name: "Бурунди" },
            { 'src': '/state/folk.png', name: "Бурунди" },
            { 'src': '/state/franggven.png', name: "Бурунди" },
            { 'src': '/state/franpol.png', name: "Бурунди" },
            { 'src': '/state/franuzch.png', name: "Бурунди" },
            { 'src': '/state/gabon.png', name: "Бурунди" },
            { 'src': '/state/gain.png', name: "Бурунди" },
            { 'src': '/state/gait.png', name: "Бурунди" },
            { 'src': '/state/gamb.png', name: "Бурунди" },
            { 'src': '/state/gana.png', name: "Бурунди" },
            { 'src': '/state/garn.png', name: "Бурунди" },
            { 'src': '/state/gerns.png', name: "Бурунди" },
            { 'src': '/state/gruz.png', name: "Бурунди" },
            { 'src': '/state/gvad.png', name: "Бурунди" },
            { 'src': '/state/gvat.png', name: "Бурунди" },
            { 'src': '/state/gvin-b.png', name: "Бурунди" },
            { 'src': '/state/gvin.png', name: "Бурунди" },
            { 'src': '/state/gyam.png', name: "Бурунди" },
            { 'src': '/state/gzcher.png', name: "Бурунди" },
            { 'src': '/state/iam.png', name: "Бурунди" },
            { 'src': '/state/iap.png', name: "Бурунди" },
            { 'src': '/state/ind.png', name: "Бурунди" },
            { 'src': '/state/indonez.png', name: "Бурунди" },
            { 'src': '/state/iomen.png', name: "Бурунди" },
            { 'src': '/state/iord.png', name: "Бурунди" },
            { 'src': '/state/irak.png', name: "Бурунди" },
            { 'src': '/state/iran.png', name: "Бурунди" },
            { 'src': '/state/irland.png', name: "Бурунди" },
            { 'src': '/state/isp.png', name: "Бурунди" },
            { 'src': '/state/ital.png', name: "Бурунди" },
            { 'src': '/state/izr.png', name: "Бурунди" },
            { 'src': '/state/kabover.png', name: "Бурунди" },
            { 'src': '/state/kaim.png', name: "Бурунди" },
            { 'src': '/state/kamb.png', name: "Бурунди" },
            { 'src': '/state/kamer.png', name: "Бурунди" },
            { 'src': '/state/kanad.png', name: "Бурунди" },
            { 'src': '/state/kanar.png', name: "Бурунди" },
            { 'src': '/state/kaza.png', name: "Бурунди" },
            { 'src': '/state/ken.png', name: "Бурунди" },
            { 'src': '/state/kipr.png', name: "Бурунди" },
            { 'src': '/state/kirg.png', name: "Бурунди" },
            { 'src': '/state/kirib.png', name: "Бурунди" },
            { 'src': '/state/kit.png', name: "Бурунди" },
            { 'src': '/state/klip.png', name: "Бурунди" },
            { 'src': '/state/kokos.png', name: "Бурунди" },
            { 'src': '/state/kol.png', name: "Бурунди" },
            { 'src': '/state/kong.png', name: "Бурунди" },
            { 'src': '/state/kongb.png', name: "Бурунди" },
            { 'src': '/state/kosov.png', name: "Бурунди" },
            { 'src': '/state/kotod.png', name: "Бурунди" },
            { 'src': '/state/kub.png', name: "Бурунди" },
            { 'src': '/state/kur.png', name: "Бурунди" },
            { 'src': '/state/kuv.png', name: "Бурунди" },
            { 'src': '/state/kyka.png', name: "Бурунди" },
            { 'src': '/state/laos.png', name: "Бурунди" },
            { 'src': '/state/lat.png', name: "Бурунди" },
            { 'src': '/state/les.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/litv.png', name: "Бурунди" },
            { 'src': '/state/liv.png', name: "Бурунди" },
            { 'src': '/state/livi.png', name: "Бурунди" },
            { 'src': '/state/lixt.png', name: "Бурунди" },
            { 'src': '/state/luk.png', name: "Бурунди" },
            { 'src': '/state/madagas.png', name: "Бурунди" },
            { 'src': '/state/mai.png', name: "Бурунди" },
            { 'src': '/state/makao.png', name: "Бурунди" },
            { 'src': '/state/maked.png', name: "Бурунди" },
            { 'src': '/state/malai.png', name: "Бурунди" },
            { 'src': '/state/mali.png', name: "Бурунди" },
            { 'src': '/state/malid.png', name: "Бурунди" },
            { 'src': '/state/malit.png', name: "Бурунди" },
            { 'src': '/state/maliv.png', name: "Бурунди" },
            { 'src': '/state/marsh.png', name: "Бурунди" },
            { 'src': '/state/mart.png', name: "Бурунди" },
            { 'src': '/state/mavr.png', name: "Бурунди" },
            { 'src': '/state/mavrit.png', name: "Бурунди" },
            { 'src': '/state/meks.png', name: "Бурунди" },
            { 'src': '/state/men.png', name: "Бурунди" },
            { 'src': '/state/miam.png', name: "Бурунди" },
            { 'src': '/state/mikro.png', name: "Бурунди" },
            { 'src': '/state/moldova.png', name: "Бурунди" },
            { 'src': '/state/monako.png', name: "Бурунди" },
            { 'src': '/state/mong.png', name: "Бурунди" },
            { 'src': '/state/monser.png', name: "Бурунди" },
            { 'src': '/state/mont.png', name: "Бурунди" },
            { 'src': '/state/morok.png', name: "Бурунди" },
            { 'src': '/state/mozar.png', name: "Бурунди" },
            //продолжение следует
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
            { 'src': '/state/lib.png', name: "Бурунди" },
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
        i++;
      };
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
