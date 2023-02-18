<template>

  <MainBar style="z-index: 1000;" v-model:windowItem="windowItem" @activeWindow="activeWindow"/>


  <StartMenu  style="z-index: 1001;"/>
  <div :style="`height: ${displayWindowArea}px; width: 100%; position: absolute;`">
    <!-- <div style="position: absolute; color: red;">
      <h1>index.vue LOCAL_STYLE</h1>
      <h5>height: {{displayWindowArea}}px width: {{windowInnerWidth}}px</h5>
    </div> -->
    <WorkSpace />
    <Window v-for="(item, index) in windowItem" v-model:top=item.top v-model:left=item.left v-model:width=item.width
      v-model:height=item.height v-model:minWidth=item.minWidth v-model:minHeight=item.minHeight
      v-model:isDragging=item.isDragging v-model:isResizing=item.isResizing v-model:isMaximized=item.isMaximized
      v-model:maxWidth=item.maxWidth v-model:maxHeight=item.maxHeight v-model:isActive=item.isActive :windowId=index
      v-model:title=item.title :windowInnerWidth="windowInnerWidth" style="position: absolute;"
      :style="`z-index:${item.zindex}`" @clickWindow="activeWindow" @clickDestroy="destroyWindow">

      <AppsWelcome />
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
  background-image: url("@/assets/image/milad-fakurian-E8Ufcyxz514-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  height: 100%;
  width: 100%;
  overflow: hidden;

}

// vuetifyをウィンドウ内に収める
.v-application__wrap {
  min-height: 100%
}
</style>
<script>
import MainBar from "@/components/MainBar";
export default {

  data() {
    return {
      windowInnerWidth: 0,
      activeWindowId: [],
      windowItem: {
      
      }
      ,
      displayWindowArea:0

    }
  },
  mounted: function () {
    this.loadItems()
    window.onresize = () => {
      this.loadItems()
    }
  },

  methods: {
    loadItems() {

      this.windowInnerWidth = window.innerWidth
      this.displayWindowArea=window.innerHeight-50

      console.log(this.displayWindowArea)
      //  console.log(this.windowInnerWidth)
    },
    activeWindow(data) {

      //同一の内容が要素内に入っていたらindexを取得
      var index = this.activeWindowId.indexOf(data);

      //要素が見つかった時だけ、削除する
      if (index !== -1) {
        this.activeWindowId.splice(index, 1)
      }
      //同一の内容が要素内に入っていたらindexを取得
      this.activeWindowId.push(data)
      //再配置
      this.activeWindowId.forEach((element, index) => {
        this.windowItem[element].zindex = (index)
      });
// console.log(this.activeWindowId)
    },
    destroyWindow(windowId) {
      // const userState = useUserState();
      // console.log(userState.value.user)
      // console.log(windowId)
      this.windowItem[windowId].isActive = false

      // console.log(this.windowItem)
    }
  }

}
</script>
  
