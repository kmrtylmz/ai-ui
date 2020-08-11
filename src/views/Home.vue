<template>
  <div>
    <input v-model='data'/>
    {{data}}
    <p v-if='errorMessage' v-bind:style="errorMessage % 2 === 0 ? { color:'red', width:'100vw', backgroundColor:'yellow' } : { color:'blue'}">{{errorMessage}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      data:'',
      errorMessage:'',
    }
  },
  watch: {
    data: function(newVal,oldVal){
      this.errorMessage = newVal.length;
    }
  },
}
</script>
