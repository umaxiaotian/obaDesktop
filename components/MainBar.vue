
<template>
    <div class="glass_bar content">
        <nav class="nav navbar-expand ">
            <a href="/" class="d-block p-3 link-dark " data-bs-original-title="スタート">
                <i class="bi bi-windows" style="font-size: 1.5rem; color: #009eff;"></i>
            </a>
            <div class="navigation">
                <li v-for="menu in menuList">
                    <a class='nav-link'  :class="{ 'active': menu.isActive === true }"
                        @click="menuClickFunc(menu.funcName)" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="menu.toolTipText">
                        <!-- <i :class="menu.iconSrc" style="font-size: 1.5rem; color: #ffff;"></i> -->
                   
                        <img :src="`/icons/${menu.iconSrc}.png`" width="35" height="35" class="rounded mx-auto d-block">
                   
                    </a>
                </li>

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
    background-color: #174051;
}

.glass_bar {

    position: absolute;
    bottom: 0rem;
    z-index: 5;
    /* padding: 1rem;   nav太くする用 */
    color: white;
    background: rgba(0, 0, 0, 0.589);
   
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}









</style>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
    name: "MainBar",
    //v-model処理
    props: {
        modelValue: String // 以前は `value:String` でした
    },
    emits: ['update:modelValue'],

    data() {
        return {
            menuList: {
                'test': { iconSrc: 'edge', isActive: false, funcName: 'saveEditorInfo', toolTipText: "エディター情報からデータをダウンロードします。" },
                'open': { iconSrc: 'computer', isActive: false, funcName: 'openEditorInfo', toolTipText: "エディター情報からデータをアップロードします。" },
                'openFileManager': { iconSrc: 'mail', isActive: false, funcName: 'openFileManager', toolTipText: "ファイルマネージャーを表示します。" },


                'te2st1': { iconSrc: 'photos', isActive: false, funcName: 'saveEditorInfo', toolTipText: "エディター情報からデータをダウンロードします。" },
                't2est': { iconSrc: 'onenote', isActive: false, funcName: 'saveEditorInfo', toolTipText: "エディター情報からデータをダウンロードします。" },
      
            },
            dialog: false,
            editor: this.modelValue
        }
    },

    mounted() {
        //inti tooltip
        Array.from(document.querySelectorAll('a[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
    },

    methods: {
        menuClickFunc(event) {
            var state = {}
            switch (event) {
                //SaveEvent発火
                case 'saveEditorInfo':
                    console.log(this.editor)
                    state = JSON.stringify(this.editor.save());
                    console.log(state);
                    this.menuList.test.isActive = true;
                    break
                case 'openEditorInfo':
                    state = { "nodes": [{ "type": "DataCopyNode", "id": "node_16749225934986", "name": "DataCopy", "options": [["ValueText", null], ["ローカルファイルパス", "/tmp/sample.txt"], ["アップロード先パス", "/tmp"], ["CHMOD", "775"], ["ファイル所有者名", "xiaotian"]], "state": {}, "interfaces": [["TASK(IN)", { "id": "ni_167492793152321", "value": "" }], ["TASK(OUT)", { "id": "ni_167492793152322", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }] }]], "position": { "x": 176, "y": 335 }, "width": 200, "twoColumn": false, "customClasses": "" }, { "type": "DataCopyNode", "id": "node_16749227984417", "name": "DataCopy", "options": [["ValueText", null], ["ローカルファイルパス", "/tmp/sample.txt2"], ["アップロード先パス", "/tmp"], ["CHMOD", "777"], ["ファイル所有者名", "xiaotian2"]], "state": {}, "interfaces": [["TASK(IN)", { "id": "ni_167492793152324", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }] }], ["TASK(OUT)", { "id": "ni_167492793152325", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] }]], "position": { "x": 460, "y": 361 }, "width": 200, "twoColumn": false, "customClasses": "" }, { "type": "PlayNode", "id": "node_167492675870814", "name": "PlayRuleSetting", "options": [["Play名", null], ["ユーザー切替有効", null], ["実行ユーザー名", null], ["ホスト群", null]], "state": {}, "interfaces": [["PLAY(IN)", { "id": "ni_167492675870815", "value": "" }], ["TASK(IN)", { "id": "ni_167492675870816", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] }], ["PLAY(OUT)", { "id": "ni_167492675870817", "value": [{ "Type": "PLAY", "DataType": "PlayRule", "Param": { "PlayName": null, "UserBecome": null, "BecomeUserName": null, "Tasks": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] } }] }]], "position": { "x": 805, "y": 355 }, "width": 200, "twoColumn": false, "customClasses": "" }, { "type": "ExecNode", "id": "node_167496063373618", "name": "ExecNode", "options": [["OUT-MSG", "PLAY(IN)を実行"]], "state": {}, "interfaces": [["PLAY(IN)", { "id": "ni_167496063373619", "value": [{ "Type": "PLAY", "DataType": "PlayRule", "Param": { "PlayName": null, "UserBecome": null, "BecomeUserName": null, "Tasks": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] } }] }]], "position": { "x": 1051, "y": 347 }, "width": 200, "twoColumn": false, "customClasses": "" }], "connections": [{ "id": "167492793484436", "from": "ni_167492793152322", "to": "ni_167492793152324" }, { "id": "167492793725639", "from": "ni_167492793152325", "to": "ni_167492675870816" }, { "id": "167496063600522", "from": "ni_167492675870817", "to": "ni_167496063373619" }], "panning": { "x": -59, "y": -41 }, "scaling": 1 }
                    this.editor.load(state);
                    break
                case 'openFileManager':
                    if (!this.menuList.openFileManager.isActive) {
                        this.dialog = true;

                        this.menuList.openFileManager.isActive = true;
                    } else {
                        this.dialog = true;
                        this.menuList.openFileManager.isActive = false;
                    }
                    break

                default:
                    console.log('INVALID EVENT!!!')
            }
        },
    }
};
</script>