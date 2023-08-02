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

            { 'src': '/state/braz.png', name: "Бразилия" },
            { 'src': '/state/grets.png', name: "Греция" },
            { 'src': '/state/gruz.png', name: "Грузия" },
            { 'src': '/state/gvad.png', name: "Гваделупа" },
            { 'src': '/state/gvat.png', name: "Гватемала" },
            { 'src': '/state/gyam.png', name: "Гуама" },
            { 'src': '/state/gzcher.png', name: "Остров Джерси" },
            { 'src': '/state/iam.png', name: "Ямайка" },
            { 'src': '/state/sentvens.png', name: "Бурунди" },
            { 'src': '/state/serb.png', name: "Сербия" },
            { 'src': '/state/sevkor.png', name: "Северная Корея" },
            { 'src': '/state/sevmarian.png', name: "Северные Марианские острова" },
            { 'src': '/state/shri.png', name: "Шри-Ланка" },
            { 'src': '/state/shveits.png', name: "Швейцария" },
            { 'src': '/state/shvetsia.png', name: "Швеция" },
            { 'src': '/state/sieraleo.png', name: "Сьерра-Леон" },
            { 'src': '/state/sing.png', name: "Сингапур" },
            { 'src': '/state/sintmaar.png', name: "Синт-Мартен" },
            { 'src': '/state/iap.png', name: "Япония" },
            { 'src': '/state/ind.png', name: "Индия" },
            { 'src': '/state/indonez.png', name: "Индонезия" },
            { 'src': '/state/iomen.png', name: "Йомен" },
            { 'src': '/state/chil.png', name: "Чили" },
            { 'src': '/state/cvaz.png', name: "Эсватини" },
            { 'src': '/state/dan.png', name: "Дания" },
            { 'src': '/state/dom.png', name: "Доминика" },
            { 'src': '/state/domr.png', name: "Доминикана" },
            { 'src': '/state/dzchib.png', name: "Джибути" },
            { 'src': '/state/iord.png', name: "Иордания" },
            { 'src': '/state/byrk.png', name: "Буркина – Фасо" },
            { 'src': '/state/afgan.png', name: "Авганистан" },
            { 'src': '/state/aland.png', name: "Аландские острова" },
            { 'src': '/state/alban.png', name: "Албания" },
            { 'src': '/state/alzch.png', name: "Алжир" },
            { 'src': '/state/amer.png', name: "Американское Самоа" },
            { 'src': '/state/andor.png', name: "Андорра" },
            { 'src': '/state/angil.png', name: "Ангилья" },

            { 'src': '/state/fin.png', name: "Финляндия" },
            { 'src': '/state/folk.png', name: "Фолклендские острова" },
            { 'src': '/state/franggven.png', name: "Французская Гвинея" },
            { 'src': '/state/franpol.png', name: "Французская полинезия" },
            { 'src': '/state/gabon.png', name: "Габон" },
            { 'src': '/state/gain.png', name: "Гайана" },
            { 'src': '/state/gait.png', name: "Гаити" },
            { 'src': '/state/bangl.png', name: "Бангладеш" },
            { 'src': '/state/barbar.png', name: "Барбадос" },
            { 'src': '/state/bel.png', name: "Белорусь" },
            { 'src': '/state/belg.png', name: "Бельгия" },
            { 'src': '/state/gond.png', name: "Гондурас" },
            { 'src': '/state/gonk.png', name: "Гонконг" },
            { 'src': '/state/grenad.png', name: "Гренада" },
            { 'src': '/state/grenl.png', name: "Гренландия" },
            { 'src': '/state/samoa.png', name: "Самоа" },
            { 'src': '/state/sanmer.png', name: "Сан-Марино" },
            { 'src': '/state/santom.png', name: "Сан-том" },
            { 'src': '/state/sayd.png', name: "Саудовская Аравия" },
            { 'src': '/state/seish.png', name: "Сейшельские острова" },
            { 'src': '/state/seliv.png', name: "Сельвадор" },
            { 'src': '/state/seng.png', name: "Сенгала" },
            { 'src': '/state/gern.png', name: "Германия" },
            { 'src': '/state/azer.png', name: "Азербайджан" },
            { 'src': '/state/bach.png', name: "Бахрейн" },
            { 'src': '/state/bagam.png', name: "Багамские острова" },
            { 'src': '/state/berm.png', name: "Бермуды" },
            { 'src': '/state/boli.png', name: "Боливия" },
            { 'src': '/state/senpier.png', name: "Сен-Пьер и Микелон" },
            { 'src': '/state/bosn.png', name: "Босния и Герцеговина" },
            { 'src': '/state/bots.png', name: "Боцвана" },
            { 'src': '/state/gerns.png', name: "Гернси" },
            { 'src': '/state/gibr.png', name: "Гибраалтар" },
            { 'src': '/state/panam.png', name: "Панама" },
            { 'src': '/state/parag.png', name: "Парагвай" },
            { 'src': '/state/per.png', name: "Перу" },
            { 'src': '/state/pit.png', name: "Острова Питкэрн" },
            { 'src': '/state/pol.png', name: "Польша" },
            { 'src': '/state/port.png', name: "Португалия" },
            { 'src': '/state/pyer.png', name: "Пуэрто-Рико" },

            { 'src': '/state/brun.png', name: "Бруней" },
            { 'src': '/state/butan.png', name: "Бутан" },
            { 'src': '/state/bolg.png', name: "Болгария" },
            { 'src': '/state/rein.png', name: "Реюньон" },
            { 'src': '/state/rozch.png', name: "Остров Рождества" },
            { 'src': '/state/rus.png', name: "Россия" },
            { 'src': '/state/ryand.png', name: "Руанда" },
            { 'src': '/state/siria.png', name: "Сирия" },
            { 'src': '/state/slov.png', name: "Словения" },
            { 'src': '/state/slovar.png', name: "Словакия" },
            { 'src': '/state/solom.png', name: "Соломоновы острова" },
            { 'src': '/state/somali.png', name: "Сомали" },
            { 'src': '/state/sudan.png', name: "Судан" },
            { 'src': '/state/surin.png', name: "Суринама" },
            { 'src': '/state/tadg.png', name: "Таджикистан" },
            { 'src': '/state/tago.png', name: "Того" },
            { 'src': '/state/tail.png', name: "Таиланд" },
            { 'src': '/state/taiv.png', name: "Тайвань" },
            { 'src': '/state/gvin-b.png', name: "Гвинея-Бисау" },
            { 'src': '/state/gvin.png', name: "Гвинея" },
            { 'src': '/state/tanzan.png', name: "Танзания" },
            { 'src': '/state/terk.png', name: "Теркс и Кайкос" },
            { 'src': '/state/timor.png', name: "Восточный Тимор" },
            { 'src': '/state/tok.png', name: "Токелау" },
            { 'src': '/state/ton.png', name: "Тогн" },
            { 'src': '/state/trin.png', name: "Тринидад и Тобаго" },
            { 'src': '/state/tuv.png', name: "Тувалу" },
            { 'src': '/state/tyn.png', name: "Тунис" },
            { 'src': '/state/tyrk.png', name: "Туркменистан" },
            { 'src': '/state/tyrts.png', name: "Турцая" },
            { 'src': '/state/ucub.png', name: "Южный Судан" },
            { 'src': '/state/usa.png', name: "США" },
            { 'src': '/state/usland.png', name: "Исландия" },
            { 'src': '/state/vanya.png', name: "Вануату" },
            { 'src': '/state/vatikan.png', name: "Ватикан" },
            { 'src': '/state/vel.png', name: "Великобритания" },
            { 'src': '/state/veng.png', name: "Венгрия" },
            { 'src': '/state/venis.png', name: "Венесуэла" },
            { 'src': '/state/viet.png', name: "Вьетнам" },
            { 'src': '/state/virg.png', name: "Британские Виргинские острова" },
            { 'src': '/state/virg2.png', name: "Американские Виргинские острова" },
            { 'src': '/state/voznes.png', name: "Острова Святой Елена" },
            { 'src': '/state/xorv.png', name: "Хорватия" },
            { 'src': '/state/ygand.png', name: "Уганда" },
            { 'src': '/state/kur.png', name: "Кюрасао" },
            { 'src': '/state/kuv.png', name: "Кувейт" },
            { 'src': '/state/kyka.png', name: "Остров Кука" },
            { 'src': '/state/laos.png', name: "Лаос" },
            { 'src': '/state/lat.png', name: "Латвия" },
            { 'src': '/state/les.png', name: "Лесото" },
            { 'src': '/state/lib.png', name: "Либерия" },
            { 'src': '/state/litv.png', name: "Литва" },
            { 'src': '/state/liv.png', name: "Ливана" },
            { 'src': '/state/sentbert.png', name: "Сен-Бертелеми" },
            { 'src': '/state/sentkit.png', name: "Сен-Китс и Невис" },
            { 'src': '/state/sentlus.png', name: "Сент-Люсия" },
            { 'src': '/state/belz.png', name: "Белиз" },
            { 'src': '/state/beni.png', name: "Бенин" },
            { 'src': '/state/gamb.png', name: "Гамбия" },
            { 'src': '/state/gana.png', name: "Гана" },
            { 'src': '/state/ykr.png', name: "Украина" },
            { 'src': '/state/yol.png', name: "Уоллис и Футуна" },
            { 'src': '/state/yrug.png', name: "Уругвай" },
            { 'src': '/state/yzb.png', name: "Узбекистан" },
            { 'src': '/state/yzchkor.png', name: "Корея" },
            { 'src': '/state/zamb.png', name: "Замбия" },
            { 'src': '/state/zapsach.png', name: "Западная Сахара" },
            { 'src': '/state/zimb.png', name: "Зимбабве" },
            { 'src': '/state/irak.png', name: "Ирак" },
            { 'src': '/state/iran.png', name: "Иран" },
            { 'src': '/state/irland.png', name: "Ирландия" },
            { 'src': '/state/isp.png', name: "Испания" },
            { 'src': '/state/ital.png', name: "Италия" },
            { 'src': '/state/izr.png', name: "Израиль" },
            { 'src': '/state/kabover.png', name: "Кабовер" },
            { 'src': '/state/kaim.png', name: "Каймановы острова" },
            { 'src': '/state/kamb.png', name: "Камбоджия" },
            { 'src': '/state/kamer.png', name: "Камерун" },
            { 'src': '/state/kanad.png', name: "Данада" },
            { 'src': '/state/kanar.png', name: "Канарские остнова" },
            { 'src': '/state/kaza.png', name: "Казахстан" },
            { 'src': '/state/ken.png', name: "Кения" },
            { 'src': '/state/kipr.png', name: "Кипр" },
            { 'src': '/state/kirg.png', name: "Киргизия" },
            { 'src': '/state/karib.png', name: "Бонайре" },
            { 'src': '/state/kirib.png', name: "Кирибати" },
            { 'src': '/state/kit.png', name: "Китай" },
            { 'src': '/state/klip.png', name: "Франция" },
            { 'src': '/state/monser.png', name: "Монтсеррат" },
            { 'src': '/state/mont.png', name: "Черногория" },
            { 'src': '/state/morok.png', name: "Морокко" },
            { 'src': '/state/mozam.png', name: "Мазамбика" },
            { 'src': '/state/namb.png', name: "Намибии" },
            { 'src': '/state/nyar.png', name: "Науру" },
            { 'src': '/state/nep.png', name: "Непала" },
            { 'src': '/state/nider.png', name: "Нидерланды" },
            { 'src': '/state/niger.png', name: "Нигер" },
            { 'src': '/state/kokos.png', name: "Кокосовые острова" },
            { 'src': '/state/kol.png', name: "Колумбия" },
            { 'src': '/state/kong.png', name: "Республика конго" },
            { 'src': '/state/kosov.png', name: "Косов" },
            { 'src': '/state/kotd.png', name: "Код-Дивуар" },
            { 'src': '/state/kub.png', name: "Куба" },
            { 'src': '/state/angola.png', name: "Ангола" },
            { 'src': '/state/antar.png', name: "Аргентина" },
            { 'src': '/state/avst.png', name: "Австрия" },
            { 'src': '/state/antig.png', name: "Антигуа и Барбуда" },
            { 'src': '/state/armen.png', name: "Армения" },
            { 'src': '/state/arub.png', name: "Аруба" },
            { 'src': '/state/av.png', name: "Австралия" },
            { 'src': '/state/byrynd.png', name: "Бурунди" },
            { 'src': '/state/centerafr.png', name: "Центрально Африканская республика" },
            { 'src': '/state/chex.png', name: "Чехия" },
            { 'src': '/state/egip.png', name: "Египет" },
            { 'src': '/state/farer.png', name: "Фарерские острова" },
            { 'src': '/state/fidg.png', name: "Фиджи" },
            { 'src': '/state/filip.png', name: "Филиппины" },
            { 'src': '/state/livi.png', name: "Ливия" },
            { 'src': '/state/lixt.png', name: "Лихтенштейн" },
            { 'src': '/state/luk.png', name: "Люксембург" },
            { 'src': '/state/madagas.png', name: "Мадагаскар" },
            { 'src': '/state/mai.png', name: "Майотта" },
            { 'src': '/state/makao.png', name: "Макао" },
            { 'src': '/state/maked.png', name: "Македония" },
            { 'src': '/state/malai.png', name: "Малазия" },
            { 'src': '/state/mali.png', name: "Мали" },
            { 'src': '/state/malid.png', name: "Мальдивы" },
            { 'src': '/state/malit.png', name: "Мальта" },
            { 'src': '/state/maliv.png', name: "Малави" },
            { 'src': '/state/marsh.png', name: "Маршаловы острова" },
            { 'src': '/state/mart.png', name: "Мартиника" },
            { 'src': '/state/mavr.png', name: "Маврикия" },
            { 'src': '/state/mavrit.png', name: "Мавритания" },
            { 'src': '/state/meks.png', name: "Максика" },
            { 'src': '/state/men.png', name: "Остров Мен" },
            { 'src': '/state/miam.png', name: "Мьяма" },
            { 'src': '/state/mikro.png', name: "Микронезия" },
            { 'src': '/state/moldova.png', name: "Молдова" },
            { 'src': '/state/monako.png', name: "Монако" },
            { 'src': '/state/mong.png', name: "Монголия" },
            { 'src': '/state/nigeria.png', name: "Нигерия" },
            { 'src': '/state/nikar.png', name: "Никарагуа" },
            { 'src': '/state/niy.png', name: "Ниуэ" },
            { 'src': '/state/norf.png', name: "Острова Норфолк" },
            { 'src': '/state/norv.png', name: "Норвегия" },
            { 'src': '/state/novgvin.png', name: "Папуа" },
            { 'src': '/state/novkaled.png', name: "Новая Каледония" },
            { 'src': '/state/novzel.png', name: "Новая Зеландия" },
            { 'src': '/state/oae.png', name: "Объединённые Арабские Эмираты" },
            { 'src': '/state/oman.png', name: "Оман" },
            { 'src': '/state/pak.png', name: "Пакистан" },
            { 'src': '/state/pala.png', name: "Палау" },
            { 'src': '/state/pales.png', name: "Палестина" },
          ]

        }

      ]
    ,
    i: 0,
    selectedTheme: null,
    selectedQ: {},
    rightAnswer:0
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
      let count = 3;
      if (state.selectedQ.answer.length < 12) {
        count = state.selectedQ.answer.length;
      }
      while (i < count) { // выводит 0, затем 1, затем 2
        let randIndex = Math.random() * (state.selectedQ.answer.length + 1);//получаем рандомный индекс
        randIndex = Math.floor(randIndex);

        resultAnswer.push({ "name": state.selectedQ.answer[randIndex].name }); //добавляем ответ

        i++;
      };

      // TODO добавить правильный вариант и перемешать массив

      resultAnswer.push({ "name": state.selectedQ.answer[state.i].name }); //добавляем правильный ответ
      //премешиваем массив
      for (let i = resultAnswer.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [resultAnswer[i], resultAnswer[j]] = [resultAnswer[j], resultAnswer[i]];
      }
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
