<template>


  <section id="mainSection">
    <div>
  <!--    <img src="{{logo}}">
      <img :src="logo" >
      <h1>{{logo}}</h1>
      <h6>{{msg}}</h6>
-->
      <input v-model="state.message" type="text">
      <input v-model="state.number" type="text">

      <button @click="btnIsbtn">dd</button>
      <button @click="plusName">add</button>

      <br>


      <img v-show="state.isView" src="@/asset/test.png" style="width : 200px; height 200px;">


      <div v-for="(arr, index) in state.arrName" v-bind:key="index"> 
        <div v-if="arr.age <= 10"  style="color : red"> {{arr.age}} {{arr.name}} <button @click="deleteContent(index, arr)">X</button></div>
        <div v-if="arr.age > 10"  style="color : blue"> {{arr.age}} {{arr.name}} <button @click="deleteContent(index, arr)">X</button></div>
      </div>


      <!-- sytle, @click -->
      <h1 :style="{color: state.colorValue}">칼라가 변경됩니다.</h1>
      <button @click="colorChange">color change</button>


      <h3>{{state.test}}</h3>
    </div>


  </section>

</template>



<script>


import {reactive} from 'vue';

  

  export default {
    props : {
      msg : String,
      logo : String,
    },
    setup(){


      const state = reactive({
        test : "안녕",
        isView : true,
        message : "",
        number : "",
        age : "",
        isColor: true,
        colorValue : "blue",
        a : true,
        b : "",

        arrName : [
          {name : "상범", age : "18"},
          {name : "상범2", age : "20"},
          {name : "상범3", age : "24"}
        ],
        
      })

      const btnIsbtn = () => {
        state.isView = !state.isView;
      }
   
      const plusName = () => {
        if(state.message == ""){
          alert("빈값");
          return ;
        }
      


        console.log(state.arrName);
       
        state.arrName.push({name: state.number, age: state.message});
      }
      const colorChange = () => {
        state.isColor = !state.isColor;

        if(state.isColor == true){
          state.colorValue = "blue";
        }else{
          state.colorValue = "red";
        }

      }
     const deleteContent = (index, arr) => {
        // state.a.index = !state.a.index;
        console.log(index);
        console.log(arr);

       state.arrName.splice(index, 1);

     }

      return {
        state,
        btnIsbtn,
        plusName,
        colorChange,
        deleteContent
      }
    },
  }

</script>





<style scoped>

  #mainSection{
    width: 500px;
    height: 500px;
    background: #00ff00;
  }

</style>
