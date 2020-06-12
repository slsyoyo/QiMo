<template>
  <div>
   <Row>
      <i-col span="24">{{currentAphorismContent}}</i-col>
    </Row>
    <Row>
      <i-col span="24">{{currentAphorismMrname}}</i-col>
    </Row>
    <Row>
      <i-col span="24">
        <Page :total="10" showElevator  :page-size="1" size="small"  >

        </Page>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import ICol from "../../node_modules/view-design/src/components/grid/col.vue";
  export default {
    components: {ICol},
    name:"Aphorism",
    data(){
      return{
        aphorism:[],
        index:0
      }
    },
    computed:{
      currentAphorismContent(){
        if(this.aphorism.length==0){
          return"";

        }else{
          return this.aphorism[this.index].content;
        }
      },
      currentAphorismMrname(){
        if(this.aphorism.length==0){
          return"";

        }else{
          return this.aphorism[this.index].mrname;
        }

      }
    },
    methods:{
     /*get(){
      this.$axios.get("http://api.tianapi.com/txapi/dictum/index?key=759580472ea636802116827fd5b18ffe&num=10")
     .then((response)=>{
    this.aphorism=response.data.newslist
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
