export default {
  data(){
    return {
      title:"title-mixin",
    }
  },
  created() {
    console.log('created-mixin')
  },
  mounted(){
    console.log('mounted-mixin')
    console.log(this.title,'mixin')
  },
  methods:{
    _addNum(){
      this.num = this.num + 2
    },
    _addNumMixin(){
      this._addNum()
    },
  }

}