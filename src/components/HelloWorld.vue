<template>
  <div class="hello">
    <Carousel v-model="value" :height="240" radiusDot dots="outside"
              autoplay loop :autoplay-speed="3000" @on-click="jump">
      <CarouselItem>
        <img src="../assets/早安.jpg" class="imgclass"/>
      </CarouselItem>
      <CarouselItem>
        <img src="../assets/名言.jpg"  class="imgclass"/>
      </CarouselItem>
      <CarouselItem>
        <img src="../assets/笑话.jpg"  class="imgclass"/>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value:0
    }
  },
  methods:{
    jump(index){
      switch(index){
        case 0:this.$router.push({path:'/morning'}) ;break;
        case 1:this.$router.push({path:'/aphorism'}) ;break;
        case 2:this.$router.push({path:'/joke'}) ;break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.imgclass{
  width: 100%;
}
</style>
