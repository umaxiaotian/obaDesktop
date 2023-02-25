<template>
  <vue-resizable v-if="isActiveData" class="terminal" dragSelector=".toolbar" :top=topData :left=leftData
    :width=widthData :height=heightData :maxWidth=maxWidthData :maxHeight=maxHeightData :minWidth=minWidthData
    :min-height=minHeightData 
    :active=isResizingData
    
    :maximize=isMaximizedData :fitParent=true @drag:end="endDrag" @resize:end="endResize"
    @mousedown="activeMouse">

    <div class="toolbar" :style="`grid-template-columns: 24px 1fr ${buttonAreaWidth}px;`">
      <div class="icon"></div>
      <div class="title">{{ titleData }}</div>
      <div class="buttons" :style="`grid-template-columns: repeat(${buttonsCol}, 1fr);`">
        <div v-if="isButtonMinimizedData" class="button" @click="minimize">&#9472;</div>
        <div v-if="isButtonMaximizedData" class="button" @click="maximize">&#9723;</div>
        <div class="button close" @click="close">&#10005;</div>
      </div>
    </div>
    <slot />
  </vue-resizable>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.terminal {
  border: 1px solid #263243;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: 30px 1fr;
}

.toolbar {
  background: rgba(0, 0, 0, 0.644);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  display: grid;

  align-items: center;
  user-select: none;
  padding-left: 4px;
}

.icon {
  width: 16px;
  height: 16px;
  background-image: url("/icons/defaultIcon.png");
  background-size: cover;
  justify-self: center;
}

.buttons {
  height: 100%;
  display: grid;

}

.button {
  font-size: 14px;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.button:hover {
  background: #858585;
}

.button:active {
  background: #5f5f5f;
}

.close:hover {
  background: #e81123;
}

.close:active {
  background: #8b0a14;
}
</style>