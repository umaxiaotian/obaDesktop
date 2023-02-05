<template>
  <MainBar v-model="editor" />
  <obaWindow />
</template>
<style >
body {
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  color: white;
  display: flex;


  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/image/wallpaperbetter.com_3840x2160.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
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
  
