<template>
  <div>
    <div v-if="step == 0">
      <Post v-for="(a, i) in インスタデータ" :key="i" :インスタデータ="インスタデータ[i]" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
    <div @click="$store.commit('ライク増加')" class="upload-image" :style="{backgroundImage : `url(${画像})`}" :class="写真加工"></div>
    <div class="filters">
      <KilterBox  :画像="画像" :フィルター="フィルター[i]" v-for="(b,i) in フィルター" :key="b">
        <span>{{ フィルター[i] }}</span>
      </KilterBox>
    </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div :class="写真加工" class="upload-image" v-if="step == 2" :style="{backgroundImage : `url(${画像})`}"></div>
        <div class="write">
          <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
        </div>
      </div>
    </div>
</template>

<script>
import Post from "./Post.vue";
import KilterBox from "./KilterBox.vue";

export default {
  name: "container",
  data(){
    return {
      フィルター : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
    }
  },
  props: {
    インスタデータ: Array,
    step : Number,
    画像 : String,
    写真加工 : String,
  },
  components: {
    Post,
    KilterBox,
  },
  methods: {
    
  }
};
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}</style>
