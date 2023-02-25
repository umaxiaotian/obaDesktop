<script>
import {
  defineComponent,
  toRefs,
  ref,
  watch,
  onMounted,
} from "@vue/composition-api";
import VueResizable from "vue-resizable";
export default defineComponent({
  components: { VueResizable },
  props: {
    top: {
      type: Number,
    },
    left: {
      type: Number,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    minWidth: {
      type: Number,
    },
    minHeight: {
      type: Number,
    },
    isDragging: {
      type: Boolean,
    },
    isResizing: {
      type: Array,
    },
    isActive: {
      type: Boolean,
    },
    isMaximized: {
      type: Boolean,
    },
    maxWidth: {
      type: Number,
    },
    maxHeight: {
      type: Number,
    },
    title: {
      type: String,
    },
    windowInnerWidth: {
      type: Number,
    },
    windowId: {
      type: String,
    },
    isMaximized: {
      type: Boolean,
    },
    isButtonMaximized: {
      type: Boolean,
    },
    isButtonMinimized: {
      type: Boolean,
    },
  },
  setup(props, ctx) {
    const {
      top,
      left,
      width,
      height,
      minWidth,
      minHeight,
      isDragging,
      isResizing,
      isActive,
      maxWidth,
      maxHeight,
      title,
      windowInnerWidth,
      windowId,
      isMaximized,
      isButtonMaximized,
      isButtonMinimized,
    } = toRefs(props);
    const topData = ref(top.value);
    const leftData = ref(left.value);
    const widthData = ref(width.value);
    const heightData = ref(height.value);
    const minWidthData = ref(minWidth.value);
    const minHeightData = ref(minHeight.value);
    const isDraggingData = ref(isDragging.value);
    const isResizingData = ref(isResizing.value);
    const isActiveData = ref(isActive.value);
    const isMaximizedData = ref(isMaximized.value);
    const maxWidthData = ref(maxWidth.value);
    const maxHeightData = ref(maxHeight.value);
    const titleData = ref(title.value);
    const windowInnerWidthData = ref(windowInnerWidth.value);
    const windowIdData = ref(windowId.value);
    const isButtonMaximizedData = ref(isButtonMaximized.value);
    const isButtonMinimizedData = ref(isButtonMinimized.value);
    const buttonsCol = ref(1);
    const buttonAreaWidth = ref(0);
    const buttonCol = () => {
      buttonsCol.value = 1;
      if (isButtonMaximizedData.value) {
        buttonsCol.value++;
      }
      if (isButtonMinimizedData.value) {
        buttonsCol.value++;
      }
      buttonAreaWidth.value = buttonsCol.value * 46.6;
      // console.log(isResizingData.value);
    };
    const endDrag = (data) => {
      leftData.value = data.left;
    };
    const endResize = (data) => {
      widthData.value = data.width;
    };
    const minimize = () => {
      console.log("CALL MIN");
    };
    const activeMouse = () => {
      ctx.emit("clickWindow", windowIdData.value);
    };
    const maximize = () => {
      console.log("CALL MAX");
      if (isMaximizedData.value) {
        isMaximizedData.value = false;
      } else {
        isMaximizedData.value = true;
      }
    };
    const close = () => {
      ctx.emit("clickDestroy", windowIdData.value);
    };
    watch(windowInnerWidth, (newValue) => {
      windowInnerWidthData.value = newValue;
      if (leftData.value + widthData.value > windowInnerWidthData.value) {
        leftData.value = windowInnerWidthData.value - widthData.value;
      }
    });
    watch(top, (newValue) => {
      topData.value = newValue;
    });
    watch(left, (newValue) => {
      leftData.value = newValue;
    });
    watch(width, (newValue) => {
      widthData.value = newValue;
    });
    watch(height, (newValue) => {
      heightData.value = newValue;
    });
    watch(minWidth, (newValue) => {
      minWidthData.value = newValue;
    });
    watch(minHeight, (newValue) => {
      minHeightData.value = newValue;
    });
    watch(isDragging, (newValue) => {
      isDraggingData.value = newValue;
    });
    watch(isResizing, (newValue) => {
      isResizingData.value = newValue;
    });
    watch(isActive, (newValue) => {
      isActiveData.value = newValue;
    });
    watch(isMaximized, (newValue) => {
      tisMaximizedData = newValue;
    });
    watch(maxWidth, (newValue) => {
      maxWidthData.value = newValue;
    });
    watch(maxHeight, (newValue) => {
      maxHeightData.value = newValue;
    });
    watch(title, (newValue) => {
      titleData.value = newValue;
    });
    watch(windowId, (newValue) => {
      windowIdData.value = newValue;
    });
    watch(isButtonMaximized, (newValue) => {
      isButtonMaximizedData.value = newValue;
      buttonCol();
    });
    watch(isButtonMinimized, (newValue) => {
      isButtonMinimizedData.value = newValue;
      buttonCol();
    });
    onMounted(() => {
      buttonCol();
    });
    return {
      topData,
      leftData,
      widthData,
      heightData,
      minWidthData,
      minHeightData,
      isDraggingData,
      isResizingData,
      isActiveData,
      isMaximizedData,
      maxWidthData,
      maxHeightData,
      titleData,
      windowInnerWidthData,
      windowIdData,
      isButtonMaximizedData,
      isButtonMinimizedData,
      buttonsCol,
      buttonAreaWidth,
      buttonCol,
      endDrag,
      endResize,
      minimize,
      activeMouse,
      maximize,
      close,
    };
  },
});
</script>
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