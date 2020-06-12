<template>
  <div>
      <Divider>Good morning</Divider>
      <i-col span="24">{{morning}}</i-col>
      <Button long type="text">Text</Button>
  </div>
</template>
<script>
  import ICol from "../../node_modules/view-design/src/components/grid/col.vue";
  export default {
    components: {ICol},
    name:"Morning",
    data(){
      return{
        morning:this.morning,
      }
    },
    methods:{
    /* get(){
        this.$axios.get("http://api.tianapi.com/txapi/zaoan/index?key=759580472ea636802116827fd5b18ffe")
      .then((response)=>{
          this.morning=response.data.newslist[0].content
        })
          .catch();
      }*/
    },
    mounted(){
      this.get()
    }
  }
</script>
<style scoped>

</style>
