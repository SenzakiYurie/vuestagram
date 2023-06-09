<template>
  <div @click="fire" :class="フィルター" class="filter-item" :style="{backgroundImage : `url(${画像})`}">
    <slot></slot>
  </div> 
</template>

<script>
export default {
  name : 'filterbox',
  data(){
    return {
  }
},
  props : {
    画像 : String,
    フィルター : Array,
  },
  methods: {
    fire(){
      this.emitter.emit('作名',this.フィルター)
    }
  },
}
</script>

<style>
  .filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>