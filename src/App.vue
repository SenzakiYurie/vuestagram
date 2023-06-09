<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul :class="setClass()">
      <li v-if="step ==1" @click="step++">Next</li>
      <li v-if="step ==2" @click="publish">Upload</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container @write="作成した文章 = $event" :インスタデータ="インスタデータ" :step="step" :画像="画像" :写真加工="写真加工" />
  <button @click="$store.dispatch('getData')" v-if="step == 0" class="view-more">もっと見る</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import data from "./assets/data.js";
import Container from "./components/Container.vue";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      インスタデータ: data,
      clickCount: 0,
      画像: '',
      作成した文章: '',
      写真加工: '',
    };
  },
  mounted(){
    this.emitter.on('作名',(a)=>{
     console.log(a);
     this.写真加工 = a;
    })
  },
  components: {
    Container,
  },
  methods: {
    publish() {
      var 私の投稿 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.画像,
        likes: 30,
        date: "May 15",
        liked: false,
        content: this.作成した文章,
        filter: this.写真加工,
      };
      this.インスタデータ.unshift(私の投稿);
      this.step = 0;
    },
    setClass() {
      if (this.step === 1) {
        return 'header-button-right'
      } else if (this.step === 2) {
        return 'upload'
      }
    },
    // more() {
    //   axios
    //     .get(`https://codingapple1.github.io/vue/more${this.clickCount}.json`)
    //     .then((a) => {
    //       this.インスタデータ.push(a.data);
    //       this.clickCount++;
    //       if(this.clickCount == 2){
    //         this.isDisplay = false;
    //       }
    //     });
    // },
    upload(e){
      let ファイル = e.target.files;
      let url = URL.createObjectURL(ファイル[0]);
      console.log(url);
      this.画像 =  url;
      this.step++;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
