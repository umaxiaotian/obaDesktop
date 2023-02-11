<template>


        <grid-layout :layout.sync="items" :col-num="cols" :max-rows="rows" :row-height="112" :is-draggable="true"
            :is-resizable="false" :is-mirrored="false" :vertical-compact="false" :margin="[2, 2]"
            :use-css-transforms="true" style="width: 100%; height: 100%;">
            <grid-item v-for="item in items" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i"
                style="touch-action: none;">
                <div class="text-center">
                    <img src="@/assets/icons/explorer.png" width="43" height="43"><br>
                    <span class="text-white text-xs text-center app-name">{{ item.label }}</span>
                </div>
            </grid-item>

        </grid-layout>
        <!-- <transition name="window">
    <VSCode v-show="apps.vscode.isActive"/>
</transition> -->
   
</template>
<script>
import VueGridLayout from 'vue3-grid-layout'
import { ref } from 'vue'
export default {
    name: 'Workspace',
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,

    },
    data() {
        return {
            shownApps: ['vscode'],
            cols: 15,
            rows: 15,
            items: [],
            activeItem: -1,

        }
    },
    mounted: function () {
        this.loadItems();
        window.onresize = () => {
            this.loadItems()
        }
    },
    methods: {
        loadItems() {
            this.updateGrid()
            let items = [
                { label: 'This PC', icon: 'computer' },
                { label: 'Recycle Bin', icon: 'trash-empty' },
                { label: 'File Explorer', icon: 'explorer' },
                { label: 'Microsoft Store', icon: 'store-' + this.iconTheme },
                { label: 'Microsoft Edge', icon: 'edge' }
            ]
            for (let i = 0; i < items.length; i++) {
                items[i].x = parseInt(i / this.rows)
                items[i].y = i % this.rows
                items[i].w = 1
                items[i].h = 1
                items[i].i = i
            }
            this.items = items
        },
        updateGrid() {
            this.cols = parseInt(window.innerWidth / 96)
            this.rows = parseInt(window.innerHeight / 112)
        }
    },

}
</script>

<style lang="scss">
.desktop-icons {

    .app {
        .app-name {
            color: #fafafa;
            margin: 4px 0;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
        }
    }

    .vue-grid-item {
        cursor: auto !important;
    }

    .vue-grid-item.vue-grid-placeholder {
        background: #ceceff !important;
    }
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