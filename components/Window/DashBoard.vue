<template>
  <vue-resizable class="terminal" dragSelector=".toolbar" :top=top :left=left :width=width :height=height
    :maxWidth=maxWidth :maxHeight=maxHeight :min-width=minWidth :min-height=minHeight :maximize=isMaximized
    fitParent=true>
    <div class="toolbar">
      <div class="icon"></div>
      <div class="title">oNas管理パネル</div>
      <div class="buttons">
        <div class="button" @click="minimize">&#9472;</div>
        <div class="button" @click="maximize">&#9723;</div>
        <div class="button close" @click="close">&#10005;</div>
      </div>
    </div>
    <div class="super">
      <div class="container-fluid">
        <div class="row g-0">
            <nav class="col-2 bg-light pr-3">
                <h1 class="h4 py-3 text-center text-primary">
                    <i class="fas fa-ghost mr-2"></i>
                    <span class="d-none d-lg-inline">
                        GHOST Admin
                    </span>
                </h1>
                <div class="list-group text-center text-lg-left">
                    <span class="list-group-item disabled d-none d-lg-block">
                        <small>CONTROLS</small>
                    </span>
                    <a href="#" class="list-group-item list-group-item-action active">
                        <i class="fas fa-home"></i>
                        <span class="d-none d-lg-inline">Dashboard</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-users"></i>
                        <span class="d-none d-lg-inline">Users</span>
                        <span class="d-none d-lg-inline badge bg-danger rounded-pill float-right">20</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-chart-line"></i>
                        <span class="d-none d-lg-inline">Statistics</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-flag"></i>
                        <span class="d-none d-lg-inline">Reports</span>
                    </a>
                </div>
                <div class="list-group mt-4 text-center text-lg-left">
                    <span class="list-group-item disabled d-none d-lg-block">
                        <small>ACTIONS</small>
                    </span>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-user"></i>
                        <span class="d-none d-lg-inline">New User</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-edit"></i>
                        <span class="d-none d-lg-inline">Update Data</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="far fa-calendar-alt"></i>
                        <span class="d-none d-lg-inline">Add Events</span>
                    </a>
                </div>
            </nav>
            <main class="col-10 bg-secondary">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="flex-fill"></div>
                    <div class="navbar nav">
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle"
                                data-toggle="dropdown">
                                <i class="fas fa-user-circle"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#" class="dropdown-item">User Profile</a>
                                </li>
                                <li>
                                    <a href="#" class="dropdown-item">Logout</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-lint"><i class="fas fa-cog"></i></a>
                        </li>
                    </div>
                </nav>
                <div class="container-fluid mt-3 p-4">
                    <div class="row mb-3">
                        <div class="col">
                            <div class="alert alert-info">
                                <i class="fas fa-download mr-2"></i>
                                A new version of admin dashboard is released.
                                <a href="#">Download Now!</a>
                            </div>
                        </div>
                    </div>
                    </div>
                
                <div class="row flex-column flex-lg-row">
                    <h2 class="h6 text-white-50">QUICK STATS</h2>
                    <div class="col">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h3 class="card-title h2">1,250</h3>
                                <span class="text-success">
                                    <i class="fas fa-chart-line"></i>
                                    Daily visitors
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h3 class="card-title h2">8,210</h3>
                                <span class="text-success">
                                <i class="fas fa-chart-line"></i>
                                Weekly visitors
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h3 class="card-title h2">12,560</h3>
                                <span class="text-success">
                                <i class="fas fa-chart-line"></i>
                                Monthly visitors
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h3 class="card-title h2">102,250</h3>
                                <span class="text-success">
                                    <i class="fas fa-chart-line"></i>
                                    Yearly visitors
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 flex-column flex-lg-row">
                    <div class="col">
                        <h2 class="h6 text-white-50">LOCATION</h2>
                        <div class="card mb-3" style="height: 280px">
                            <div class="card-body">
                                <small class="text-muted">Regional</small>
                                <div class="progress mb-4 mt-2" style="height: 5px">
                                    <div class="progress-bar
                                    bg-success w-25"></div>
                                </div>
                                <small class="text-muted">Global</small>
                                <div class="progress mb-4 mt-2" style="height: 5px">
                                    <div class="progress-bar bg-primary w-75"></div>
                                </div>
                                <small class="text-muted">Local</small>
                                <div class="progress mb-4 mt-2" style="height: 5px">
                                    <div class="progress-bar
                                    bg-warning w-50"></div>
                                </div>
                                <small class="text-muted">Internal</small>
                                <div class="progress mb-4 mt-2" style="height: 5px">
                                    <div class="progress-bar bg-danger w-25"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h2 class="h6 text-white-50">DATA</h2>
                        <div class="card mb-3" style="height: 280px">
                            <div class="card-body">
                                <div class="text-right">
                                    <button class="btn btn-sm btn-outline-secondary">
                                        <i class="fas fa-search"></i>
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary">
                                        <i class="fas fa-sort-amount-up"></i>
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary">
                                        <i class="fas fa-filter"></i>
                                    </button>
                                </div>
                                <table class="table">
                                    <tr>
                                        <th>ID</th>
                                        <th>Age Group</th>
                                        <th>Data</th>
                                        <th>Progress</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>20-30</td>
                                        <td>19%</td>
                                        <td>
                                            <i class="fas fa-chart-pie"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30-40</td>
                                        <td>40%</td>
                                        <td>
                                            <i class="fas fa-chart-bar"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>40-50</td>
                                        <td>20%</td>
                                        <td>
                                            <i class="fas fa-chart-line"></i>
                                        </td>
                                    </tr>
                                        <tr>
                                        <td>4</td>
                                        <td>>50</td>
                                        <td>11%</td>
                                        <td>
                                            <i class="fas fa-chart-pie"></i>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <footer class="text-center py-4 text-muted">
        &copy; Copyright 2020
    </footer>


    </div>
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
  background: #1a1a1a;
}

.button:active {
  background: #353535;
}

.close:hover {
  background: #e81123;
}

.close:active {
  background: #8b0a14;
}

.super {
  background: #012456;
  overflow-y: scroll;
  width: 100%;
}

.text {
  font-family: Monospace;
  cursor: default;
  font-size: 12px;
  color: white;
}

.text::selection {
  background: rgba(254, 219, 169, 0.99);
  color: #11123f;
}

.space {
  margin-bottom: 20px;
}

.cursor {
  width: 7px;
  height: 4px;
  background: #fedba9;
  margin-left: 2px;
  display: inline-block;
  animation: blink 1s step-start 0s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
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