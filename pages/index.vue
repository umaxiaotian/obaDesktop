<template>
  
  <MainBar />
  <div style="height: 95vh; width: 100wh; border: 1px solid red; position: relative;">
  
  <div  style="position: absolute; color: red;">
    <h1>index.vue LOCAL_STYLE</h1>
   <h5>height: 95vh; width: 100wh</h5> 
   </div> 
   <WorkSpace />
 
   <Window   style="position: absolute; z-index: 1">
    <AppsBoot/> 
    </Window>
    <Window   style="position: absolute; z-index: 11">
       <AppsBoot/> 
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
  background-image: url("@/assets/image/202300834-Onimai-PC-Wallpaper.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
}
// vuetifyをウィンドウ内に収める
.v-application__wrap{
    min-height:100%
}
</style>
<script>
import MainBar from "@/components/MainBar";
export default {

}
</script>
  
