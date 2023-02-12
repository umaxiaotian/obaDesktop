<template>
  <MainBar />
  <div style="height: 95vh; width: 100wh; border: 1px solid red; position: relative;">
  
  <div  style="position: absolute; color: red;">
    <h1>index.vue LOCAL_STYLE</h1>
   <h5>height: 95vh; width: 100wh</h5> 
   </div>
   <WorkSpace />
  <Window style="position: absolute;" >
    <p class="text">The Oba PowerShell</p>
      <p class="text space">Copyright (C) UMAXIAOTIAN Corporation. Todos los derechos reservados.</p>
      <p class="text space">Prueba la nueva tecnología PowerShell multiplataforma https://github.com/umaxiaotian</p>
      <p class="text">PS C:\User\umaxiaotian> <span class="cursor"></span></p>
    </Window>
    <Window style="position: absolute;" >
        <AppsDashboard />
    </Window>
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
export default {

}
</script>
  
