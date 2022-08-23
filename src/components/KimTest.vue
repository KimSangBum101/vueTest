<template>


  <section id="mainSection">
    <div>
      <img v-show="state.pictureOn" src="@/asset/test.png" style="width : 200px; height 200px;" @click="ageAdd">
      <button @click="pictureChange">O</button>
      <button @click="ageAdd">click</button>
      <button @dblclick	="ageAdd">dblclick</button>
      <button @mouseover="ageAdd">mouseover</button>
      <button @mouseout="ageAdd">mouseout</button>
      <button @mouseup="ageAdd">mouseup</button>
      <button @keydown="ageAdd">keydown</button>
      <button @keyup="ageAdd">keyup</button>
      <button @keypress="ageAdd">keypress</button>
      <button @change="ageAdd">change</button>
      <button @click="ageAdd">O</button>
      <input v-model="state.textName" type="text" @keydown="keyDown" @keyup="keyup"  >
      <input v-model="state.numberAge" type="text">

      <input v-model="testWatch">

      <button @click="addContent">O</button>
      <div v-for="(arr, index) in state.Info" :key="index">
        <h1 v-if="arr.age <= 18" style="color: red">{{ arr.name }} {{ arr.age }}</h1>
        <h1 v-if="arr.age > 18" style="color: blue">{{ arr.name }} {{ arr.age }}</h1>
        <button @click="deleteContent(index)">X</button>
      </div>

    </div>


  </section>

</template>



<script>
import {watch, ref, reactive,onBeforeMount, onMounted, onUnmounted} from 'vue';


  export default {
    props : {
      msg : String,
      logo : String,
    },
    setup() {
      let testWatch = ref('');


      watch(testWatch, ()=>{
        if(testWatch.value.match(/(\d|[!@#])+/)){
          testWatch.value = '';
        }
      })


      onBeforeMount(()=>{
        //이벤트 등록 
        console.log("onBeforeMount");
      })

      onMounted(()=>{
        console.log("onMounted");
        state.age+=3;
      })

      onUnmounted(()=>{
        console.log("unmounted");
        //이벤트 해제 
      })

      const state = reactive({
        pictureOn : true,
        Info:[
          {name:"김상범", age:18},
          {name:"김상범2", age:20},
          {name:"김상범3", age:30}
        ],
        age : 1,
        textName : '',
        numberAge : ''
      })
      const addContent = () =>{
        state.Info.push({name : state.textName, age : state.numberAge });
      }

      const pictureChange = () => {
        state.pictureOn = ! state.pictureOn;
      }
      const deleteContent = (index) =>{
       state.Info.splice(index, 1);
      }

      const ageAdd = () => {
        console.log(state.age);
        state.age++;
      }

      
      return {
        testWatch,
        state,
        pictureChange,
        deleteContent,
        addContent,
        ageAdd
      }    
    },

 
  }
</script>





<style scoped>


</style>
