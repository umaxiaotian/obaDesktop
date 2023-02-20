<script>
import { defineComponent, ref } from "@vue/composition-api";
import VueGridLayout from "vue3-grid-layout";
import { onMounted } from "vue";
export default defineComponent({
    name: "Workspace",
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
    },
    setup(_props, ctx) {
        const shownApps = ref(["vscode"]);
        const cols = ref(15);
        const rows = ref(15);
        const shortCutItems = ref([]);
        const activeItem = ref(-1);
        onMounted(() => {
            loadItems()
        })
        const loadItems = () => {
            updateGrid();
            let items = [
                {
                    label: "マイコンピュータ",
                    icon: "computer",
                },
                { label: "ゴミ箱", icon: "trash-empty" },
                { label: "エクスプローラー", icon: "explorer" },
                { label: "Github", icon: "github" },
            ];
            for (let i = 0; i < items.length; i++) {
                items[i].x = parseInt(i / rows.value);
                items[i].y = i % rows.value;
                items[i].w = 1;
                items[i].h = 1;
                items[i].i = i;
            }
            shortCutItems.value = items;
        };
        const updateGrid = () => {
            cols.value = parseInt(window.innerWidth / 96);
            rows.value = parseInt(window.innerHeight / 112);
        };
        return {
            shownApps,
            cols,
            rows,
            shortCutItems,
            activeItem,
            loadItems,
            updateGrid,
        };
    },
});
</script>
<template>
    <div class="display">
        <grid-layout :layout.sync="shortCutItems" :col-num="cols" :max-rows="rows" :row-height="112" :is-draggable="true"
            :is-resizable="false" :is-mirrored="false" :vertical-compact="false" :margin="[2, 2]" :use-css-transforms="true"
            style="width: 100%; height: 100%;">
            <grid-item v-for="item in shortCutItems" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i"
                :key="item.i" style="touch-action: none;">
                <div class="text-center">
                    <img :src="`/icons/${item.icon}.png`" width="43" height="43"><br>
                    <span class="app-name ">{{ item.label }}</span>
                </div>
            </grid-item>

        </grid-layout>
        <!-- <transition name="window">
        <VSCode v-show="apps.vscode.isActive"/>
    </transition> -->
    </div>
</template>
<style lang="scss" scoped>
.app-name {
    color: #ffffff;
    margin: 4px 0;
    text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.6);
}

.window-enter,
.window-leave-to {
    visibility: hidden;
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    transform: scale(0.95);
}

.window-enter-active,
.window-leave-active {
    transition: all 0.3s;
}
</style>