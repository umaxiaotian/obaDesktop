<template>

  <MainBar />
  <div style="height: 95vh; width: 100wh; border: 1px solid red; position: relative;">
    <div style="position: absolute; color: red;">
      <h1>index.vue LOCAL_STYLE</h1>
      <h5>height: 95vh; width: 100wh</h5>
    </div>
    <WorkSpace />
    <Window v-for="(item, index) in windowItem"  
 
    :top=item.top
    :left=item.left
     :width=item.width
      :height=item.height
      :minWidth=item.minWidth
      :minHeight=item.minHeight
      :isDragging=item.isDragging
      :isResizing=item.isResizing
      :isMaximized=item.isMaximized
      :maxWidth=item.maxWidth
      :maxHeight=item.maxHeight
       :windowId=index
       :title=item.title
      :windowInnerWidth="windowInnerWidth" style="position: absolute;"
      :style="(activeWindowId === index) ? 'z-index:100' : 'z-index-1'" @clickWindow="activeWindow">
      <AppsBoot />
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
      activeWindowId: 0,
      windowItem: {
        1: {
          top: 20,
          left: 300,
          width: 700,
          height: 200,
          minWidth: 500,
          minHeight: 500,
          isDragging: true,
          isResizing: true,
          isActive: false,
          isMaximized: false,
          maxWidth: 1000,
          maxHeight: 1000,
          title: "ウィンドウコンポーネント１"
        },
        2: {
          top: 20,
          left: 900,
          width: 700,
          height: 200,
          minWidth: 500,
          minHeight: 500,
          isDragging: true,
          isResizing: true,
          isActive: true,
          isMaximized: false,
          maxWidth: 1000,
          maxHeight: 1000,
          title: "ウィンドウコンポーネント２"
        },
        3: {
          top: 20,
          left: 100,
          width: 700,
          height: 200,
          minWidth: 500,
          minHeight: 500,
          isDragging: true,
          isResizing: true,
          isActive: true,
          isMaximized: false,
          maxWidth: 1000,
          maxHeight: 1000,
          title: "ウィンドウコンポーネント３"
        },
      }

    }
  },
  mounted: function () {
    window.onresize = () => {
      this.loadItems()
    }
  },

  methods: {
    loadItems() {

      this.windowInnerWidth = window.innerWidth
      //  console.log(this.windowInnerWidth)
    },
    activeWindow(data) {
      console.log(data)
      this.activeWindowId = data;

    }
  }

}
</script>
  
