import { createStore } from "vuex";
import axios from 'axios';
import data from "./assets/data.js";

const store = createStore({
  state() {
    return {
      インスタデータ: data,
      name: "Kim",
      age: 20,
      likes: 30,
      likesCount: 0,
      clickCount: 0,
      isDisplay :false,
    };
  },
  mutations: {
    viewMore(state, data) {
      state.インスタデータ.push(data);
    },
    count(state) {
      state.clickCount = state.clickCount + 1;
    },
    名前変更(state) {
      state.name = "park";
    },
    年齢増加(state, data) {
      state.age += data;
    },
    ライク増加(state) {
      state.likesCount++;
      if (state.likesCount % 2 == 0) {
        state.likes++;
      } else {
        state.likes--;
      }
    },
  },
  actions: {
    getData({ commit }) {
      axios
        .get(
          `https://codingapple1.github.io/vue/more${this.state.clickCount}.json`
        )
        .then((a) => {
          commit("count");
          commit("viewMore", a.data);
          if(this.state.clickCount == 2){
            this.state.isDisplay = true;
          }
        });
    }
  }
});

export default store;
