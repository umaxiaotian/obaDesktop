<script>
import { defineComponent, toRefs, ref, onMounted } from "@vue/composition-api";
import "bootstrap/dist/js/bootstrap.min.js";
export default defineComponent({
    name: "MainBar",
    props: {
        windowItem: Object,
    },
    setup(props, ctx) {
        const { windowItem } = toRefs(props);
        const WindowItems = ref(windowItem.value);
        const activeWindowId = ref({});
        const menuList = ref({
            1: {
                iconSrc: "computer",
                isActive: false,
                funcName: "openEditorInfo",
                toolTipText:
                    "ウィンドウコンポーネント１",
                zindex: 0,
                top: 400,
                left: 600,
                width: 800,
                height: 400,
                minWidth: 500,
                minHeight: 500,
                isDragging: true,
                isResizing: [],
                isMaximized: false,
                maxWidth: 1000,
                maxHeight: 1000,
                isButtonMaximized: false,
                isButtonMinimized: false,
                showComponents: "AppsWelcome",
                title:
                    "ウィンドウコンポーネント１",
            },
            2: {
                iconSrc: "mail",
                isActive: false,
                funcName: "openFileManager",
                toolTipText:
                    "ウィンドウコンポーネント２",
                zindex: 0,
                top: 400,
                left: 600,
                width: 700,
                height: 200,
                minWidth: 500,
                minHeight: 500,
                isDragging: true,
                isResizing: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
                isButtonMaximized: true,
                isButtonMinimized: true,
                isMaximized: false,
                maxWidth: 1000,
                maxHeight: 1000,
                showComponents: "AppsBoot",
                title:
                    "ウィンドウコンポーネント２",
            },
            3: {
                iconSrc: "photos",
                isActive: false,
                funcName: "saveEditorInfo",
                toolTipText:
                    "ウィンドウコンポーネント３",
                zindex: 0,
                top: 400,
                left: 600,
                width: 500,
                height: 500,
                minWidth: 500,
                minHeight: 500,
                isDragging: true,
                isResizing: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
                isButtonMaximized: true,
                isButtonMinimized: true,
                isMaximized: false,
                maxWidth: 1000,
                maxHeight: 1000,
                showComponents: "AppsBoot",
                title:
                    "ウィンドウコンポーネント３",
            },
        });
        const menuClickFunc = (windowId) => {
            if (!menuList.value[windowId].isActive) {
                menuList.value[windowId].isActive = true;
                WindowItems.value[windowId] = menuList.value[windowId];
                WindowItems.value[windowId].top =
                    (window.innerHeight - WindowItems.value[windowId].height) / 3;
                WindowItems.value[windowId].left =
                    (window.innerWidth - WindowItems.value[windowId].width) / 2;
                ctx.emit("activeWindow", windowId);
            } else {
                menuList.value[windowId].isActive = false;
            }
        };
        onMounted(() => {
            menuClickFunc("1");
        });
        return { WindowItems, activeWindowId, menuList, menuClickFunc };
    },
});
</script>
<template>
    <div class="glass_bar content">
        <nav class="nav navbar-expand ">
            <a href="/" class="d-block p-3 link-dark " title="スタート" data-bs-toggle="tooltip" data-bs-placement="top">
                <img :src="`/icons/widget.png`" width="26" height="26" class="rounded mx-auto d-block">
            </a>
            <div class="navigation">
                <div style="height: 100%; " v-for="(menu, index) in menuList">
                    <a style=" height: 100%; 
                        display: flex;
      justify-content: center;
      align-items: center;
                        " data-bs-toggle="tooltip" data-bs-placement="top" class='nav-link'
                        :class="{ 'active': menu.isActive === true }" @click="menuClickFunc(index)"
                        :title="menu.toolTipText">
                        <!-- <i :class="menu.iconSrc" style="font-size: 1.5rem; color: #ffff;"></i> -->
                        <img :src="`/icons/${menu.iconSrc}.png`" width="26" height="26" class="rounded mx-auto d-block">
                    </a>
                </div>

            </div>
        </nav>
    </div>
</template>
<style  scoped>
.content {
    width: 100%;
    -webkit-overflow-scrolling: touch;
}

.navigation {
    display: flex;
    align-items: center;
    width: 100%;
    list-style: none;
    overflow-x: auto;
}

.navigation::-webkit-scrollbar {
    width: 16px;
}

.navigation::-webkit-scrollbar-track {
    background-color: #777777;
    border-radius: 100px;
}

.navigation::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: 100px;
}


.navigation-item {
    padding: 20px 30px;
    color: #333;
    word-break: keep-all;
    text-decoration: none;
}

.nav-link:hover {
    background-color: #3598c2;
}

.nav-link.active {
    background-color: #0202028f;
    border-bottom: 5px solid #00d9ff;
}

.glass_bar {
    /* padding: 1rem;   nav太くする用 */
    color: white;
    background: rgba(0, 0, 0, 0.589);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    /* border-top: 1px solid rgba(255, 255, 255, 0.3); */
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
    border-bottom: 1px solid rgba(255, 255, 255, 0.521);
}</style>