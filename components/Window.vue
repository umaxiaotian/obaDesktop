<template>
  <vue-resizable class="terminal" dragSelector=".toolbar" :top=top :left=left :width=width :height=height
    :maxWidth=maxWidth :maxHeight=maxHeight :min-width=minWidth :min-height=minHeight :maximize=isMaximized
    fitParent=true>
    <div class="toolbar" @mousedown="activeMouse">
      <div class="icon"></div>
      <div class="title">oNasWindowComponents</div>
      <div class="buttons">
        <div class="button" @click="minimize">&#9472;</div>
        <div class="button" @click="maximize">&#9723;</div>
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
  grid-template-columns: 24px 1fr 140px;
  align-items: center;
  user-select: none;
  padding-left: 4px;
}

.icon {
  width: 16px;
  height: 16px;
  background-image: url("https://vectorified.com/images/powershell-icon-25.png");
  background-size: cover;
  justify-self: center;
}

.buttons {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
<script>
import VueResizable from 'vue-resizable'
export default {
  components: { VueResizable },
  data() {
    return {
      top: 20,
      left: 100,
      width: 700,
      height: 700,
      minWidth: 500,
      minHeight: 500,
      isDragging: true,
      isResizing: true,
      isActive: true,
      isMaximized: false,
      maxWidth: 1000,
      maxHeight: 1000
    }
  },
  mounted: function () {
    window.onresize = () => {
      this.loadItems()
    }
  },
  methods: {
    loadItems() {
      console.log("RESIZE!!!!")
      this.left = parseInt(window.innerWidth) - this.width
      // this.maxHeight = parseInt(window.innerHeight )
    },

    minimize() {
      console.log("CALL MIN")
    },
    activeMouse(){
      console.log("MouseOver")
    },
    maximize() {
      console.log("CALL MAX")
      if(this.isMaximized){
      this.isMaximized = false
      }else{
        this.isMaximized = true
      }
    },
    close() {
      console.log("CALL CLOSE")
    },

  }

}



</script>