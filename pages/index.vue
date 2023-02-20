<script>
import { defineComponent, ref } from "@vue/composition-api";
import MainBar from "@/components/MainBar";
import AppsWelcome from "@/components/Apps/Welcome.vue";
import AppsBoot from "@/components/Apps/Boot.vue";
import { onMounted } from "vue";
export default defineComponent({
  components: {
    AppsBoot,
    AppsWelcome,
  },
  setup(_props, ctx) {
    const windowInnerWidth = ref(0);
    const activeWindowId = ref([]);
    const windowItem = ref({});
    const displayWindowArea = ref(0);
    onMounted(() => {
            loadItems()
        })
    const loadItems = () => {
      windowInnerWidth.value = window.innerWidth;
      displayWindowArea.value = window.innerHeight - 50;
      console.log(displayWindowArea.value);
    };
    const activeWindow = (data) => {
      var index = activeWindowId.value.indexOf(data);
      if (index !== -1) {
        activeWindowId.value.splice(index, 1);
      }
      activeWindowId.value.push(data);
      activeWindowId.value.forEach((element, index) => {
        windowItem.value[element].zindex = index;
      });
    };
    const destroyWindow = (windowId) => {
      windowItem.value[windowId].isActive = false;
    };
    return {
      windowInnerWidth,
      activeWindowId,
      windowItem,
      displayWindowArea,
      loadItems,
      activeWindow,
      destroyWindow,
    };
  },
});
</script>
<template>
  <MainBar style="z-index: 1000;" v-model:windowItem="windowItem" @activeWindow="activeWindow"/>
  <!-- <StartMenu  style="z-index: 1001;"/> -->
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
      v-model:title=item.title 
      :windowInnerWidth="windowInnerWidth" 
      v-model:isButtonMaximized=item.isButtonMaximized
      v-model:isButtonMinimized=item.isButtonMinimized
      
      style="position: absolute;"
      :style="`z-index:${item.zindex}`" @clickWindow="activeWindow" @clickDestroy="destroyWindow">

      <component :is=item.showComponents></component>
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