<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div>
      {{title}}
    </div>
    <button @click="_addNum">点击加1</button>
    <br/>
    <button @click="_addNumMixin">minxi 点击加1</button>
    <br/>
    <span>{{num}}</span>
  </div>
</template>

<script>
import mixinTest from "./mixinTest";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      title:"title-hellwWord",
      num:1,
    }
  },
  mixins:[mixinTest],
  mounted(){
    console.log('mounted-hellwWord')
    console.log(this.title,'hellwWord')
  },
  methods:{
    _addNum(){
      this.num++
    },
  },
  
}
</script>
