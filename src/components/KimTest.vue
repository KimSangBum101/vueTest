<template>

<!-- 부모 - input, 배열      ->  자식 배열  단일삭제 , 전체 삭제  -->



  <section id="mainSection">
    <div>
     <button @click="plusInfo()">+</button>
      <input v-model="state.inputColor" />
      <button @click="minusInfo()">-</button>
      <input v-model="inputNumber" type="text" maxlength="11">
      <button @click="deleteContent">버튼</button>
    </div>
  </section>
</template>
<script>
import {reactive,ref } from 'vue';

  export default {
    props : 
      [ 'namee','agee', "info"]
    ,
    watch :{
      inputNumber(){

      let check = /^[0-9]+$/;
      if (!check.test(this.inputNumber)) {
          alert("숫자만");
          return this.inputNumber = this.inputNumber.replace(/[^0-9]/g, '');
        }
      }
    },
    setup(props, {emit}) {

      const state = reactive({
        
        info : props.info,
      })

      const inputNumber = ref('');

      const plusInfo = () =>{
        console.log(props.namee);
        console.log(props.agee);
        state.info.push({userName : props.namee, userAge : props.agee})

 
      }
      const minusInfo = () =>{
        emit("colorText", state.inputColor);
      }
      const emitTest = () => {
        console.log(state.inputColor);

        emit("colorText", state.inputColor);

      }
      const deleteContent = (index) =>{
        index;
        console.log(inputNumber.value);
        index = inputNumber.value - 1;
        state.info.splice(index, 1)
      }
      return {
        state,
        plusInfo,
        minusInfo,
        emitTest,
        deleteContent,
        inputNumber
      }    
    },

 
  }
</script>





<style scoped>


</style>
