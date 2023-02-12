<template>
  <vue-resizable
   class="terminal" 
   dragSelector=".toolbar" 
   :top=topData
   :left=leftData 
   :width=widthData :height=heightData
    :maxWidth=maxWidthData
     :maxHeight=maxHeightData
      :min-width=minWidthData 
      :min-height=minHeightData 
      :maximize=isMaximizedData
    :fitParent=true
    @drag:end="endDrag"
    @resize:end="endResize"
    @mousedown="activeMouse"
    >
    <div class="toolbar" >
      <div class="icon"></div>
      <div class="title">{{titleData}}</div>
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
  props: {
   top: {
     type: Number,
     //required: true,
   },
   left: {
     type: Number,
     //required: true,
   },
   width: {
     type: Number,
     //required: true,
   },
   height: {
     type: Number,
     //required: true,
   },
   minWidth: {
     type: Number,
     //required: true,
   },
   minHeight: {
     type: Number,
     //required: true,
   },
   isDragging: {
     type: Boolean,
     //required: true,
   },
   isResizing: {
     type: Boolean,
     //required: true,
   },
   isActive: {
     type: Boolean,
     //required: true,
   },
   isMaximized: {
     type: Boolean,
     //required: true,
   },
   maxWidth: {
     type: Number,
     //required: true,
   },
   maxHeight: {
     type: Number,
     //required: true,
   },
   title: {
     type: String,
     //required: true,
   },
   windowInnerWidth:{
    type: Number
   },
   windowId:{
    type: Number
   }
 },
//  emits: ['update:top'],
//  emits: ['update:left'],
//  emits: ['update:width'],
//  emits: ['update:height'],
//  emits: ['update:minWidth'],
//  emits: ['update:minHeight'],
//  emits: ['update:isDragging'],
//  emits: ['update:isResizing'],
//  emits: ['update:isActive'],
//  emits: ['update:isMaximized'],
//  emits: ['update:maxWidth'],
//  emits: ['update:maxHeight'],
  data() {
    return {
      topData:this.top,
      leftData:this.left,
      widthData:this.width,
      heightData:this.height,
      minWidthData:this.minWidth,
      minHeightData:this.minHeight,
      isDraggingData:this.isDragging,
      isResizingData:this.isResizing,
      isActiveData:this.isActive,
      isMaximizedData:this.isMaximized,
      maxWidthData:this.maxWidth,
      maxHeightData:this.maxHeight,
      titleData:this.title,
      windowInnerWidthData:this.windowInnerWidth,
      windowIdData:this.windowId
    }
  },
  
  watch: {
    windowInnerWidth(newValue, oldValue) {
      this.windowInnerWidthData=newValue
      if((this.leftData+this.widthData) > this.windowInnerWidthData){
       this.leftData = this.windowInnerWidthData - this.widthData
      }

    }

    },


  methods: {
    endDrag(data){
      console.log(data)
      this.leftData = data.left

      // console.log(this.resizeLeft)
    },
    endResize(data){
      this.widthData = data.width
    },

    minimize() {
      console.log("CALL MIN")
    },
    activeMouse(){


      this.$emit("clickWindow", this.windowIdData);

    },
    maximize() {
      console.log("CALL MAX")
      if(this.isMaximizedData){
      this.isMaximizedData = false
      }else{
        this.isMaximizedData = true
      }
    },
    close() {
      console.log(this.titleData)
      console.log("CALL CLOSE")
    },

  }

 

}



</script>