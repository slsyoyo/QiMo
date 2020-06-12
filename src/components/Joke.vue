<template>
  <div>
    <Collapse accordion>
      <Panel v-for="item in joke">
        <span style="display:inline-block;width:45%"> {{item.title}}</span>
        <Row slot="content" v-for="item in joke"  >
          <i-col span="24">{{item.content}}</i-col>
        </Row>
      </Panel>
    </Collapse>
  </div>
</template>
<script>

  import ICol from "../../node_modules/view-design/src/components/grid/col.vue";
  export default {
    components: {ICol},
    name:"Joke",
    data(){
      return{
        joke:[]
      }
    },
    methods:{
      /*get(){
        //使用axios访问天行API
        this.$axios.get("http://api.tianapi.com/txapi/joke/index?key=759580472ea636802116827fd5b18ffe&num=10")
      .then((response)=>{
         this.joke=response.data.newslist.map((item)=>{
           return{
             title:item.title,
             content:item.content
           }
         })
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
