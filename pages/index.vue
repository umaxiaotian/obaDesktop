<template>
  <MainBar />
  <div style="height: 95vh; width: 100wh; border: 1px solid red; position: relative;">
  <h1 style="position: absolute; color: red;">WORKSPACE.vue</h1>
    <WorkSpace />
  <obaWindow />
</div>

</template>
<style lang="scss" >
html,
body {
  // Powershell定義
  font-family: Arial;
  font-size: 12px;
  color: white;
//  デスクトップ定義
  background-image: url("@/assets/image/wallpaperbetter.com_3840x2160.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
}


</style>
<script>
import MainBar from "@/components/MainBar";
import obaWindow from "@/components/obawindow/Window.vue"
export default {
  components: { obaWindow },
}
</script>
  
