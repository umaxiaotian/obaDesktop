<template>
  <MainBar v-model="editor" />
  <obaWindow />
</template>
<style lang="scss" >
body {

  width: 100vw;
  height: 100vh;

  background: #00b1fd;
  background: linear-gradient(90deg, #00b1fd 0%, #0243c3 100%);
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  color: white;
  display: flex;


}
</style>
<script>

import MainBar from "@/components/MainBar";
import obaWindow from "@/components/obawindow/Window.vue"
export default {
  components: { obaWindow },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
  
