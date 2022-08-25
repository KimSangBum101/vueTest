<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- <HelloWorld id="mainSection" msg="dkdkdk" logo="삼성ds"/> -->
  <input type="text" v-model="namee">
  <input type="text" v-model="agee">
  <div v-for="arr, index in state.info" v-bind:key="index">
    <h1>{{arr.userName}} {{arr.userAge}}</h1>
  </div>
  <KimTest @colorText="receiver" :namee="namee" :agee="agee" :info="state.info"></KimTest>


</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import KimTest from './components/KimTest.vue'
import { reactive, ref } from 'vue'



export default {
  name: 'App',
  components: {
    // HelloWorld,
    KimTest
  },
  setup(){
    
    const namee = ref('');
    const agee = ref('');
    const state = reactive({
      name2 : "222",
      age2 : "3333",
       info : [
          {userName : "김상범", userAge : "23"}
        ]

    })
    const receiver = (value)=>{
      console.log("자식한테 받은 데이터 : "+ value);
      console.log(state.name2);
      console.log(state.age2);
    }
  
    return {
      state,
      receiver,
      namee,
      agee
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


#mainSection{
  margin-bottom: 20px;;
}
</style>
