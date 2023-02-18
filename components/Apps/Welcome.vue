<template  >
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100" >
                <div class="carousel-caption d-none d-md-block">
                          <div class="text-white text-center" >
                <h1 class="mb-3">obaDesktopへようこそ</h1>
                <h5 class="mb-4">便利なウィンドウマネージャ付きダッシュボードからあなたのサーバーを操作します。</h5>
                <a class="btn btn-outline-light btn-lg m-2" href="https://github.com/umaxiaotian/obaDesktop"
                  role="button" rel="nofollow" target="_blank">チュートリアルを見る</a>
                <a class="btn btn-outline-light btn-lg m-2" @click="neverOpen()"
                  target="_blank" role="button">このウィンドウを再表示しない</a>
              </div>

      </div>
            </div>
          </div>
    </div>
   <div class="carousel-item">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100" >
                <div class="carousel-caption d-none d-md-block">
        <h5>便利で簡単なUI</h5>
        <p>様々なUIを使ってあなたのサーバーライフをサポートします。</p>
      </div>
            </div>
          </div>
    </div>
      <div class="carousel-item">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100" >
                <div class="carousel-caption d-none d-md-block">
        <h5>Dockerベース</h5>
        <p>このウェブ画面がDocker上で動作します</p>
      </div>
            </div>
          </div>
    </div><!-- -->
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </template>
  <style scoped>
   /* Carousel styling */
   #introCarousel,
      .carousel-inner,
      .carousel-item,
      .carousel-item.active {
        height: 100%;
      }

      .carousel-item:nth-child(1) {
        background-image: url('/wall/desktop-1920x1080.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .carousel-item:nth-child(2) {
        background-image: url('/wall/wallpy-2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      .carousel-item:nth-child(3) {
        background-image: url('/wall/38054c6c-running-docker-compose-with-docker-on-ubuntu-18.04.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }

      /* Height for devices larger than 576px */
      @media (min-width: 992px) {
        #introCarousel {
          margin-top: -58.59px;
        }
      }

      .navbar .nav-link {
        color: #fff !important;
      }
</style>
  <script>
import "bootstrap/dist/js/bootstrap.bundle.min.js"
    export default {
      data: () => ({
        cards: ['Today', 'Yesterday'],
        drawer: null,
        links: [
          ['mdi-inbox-arrow-down', 'Inbox'],
          ['mdi-send', 'Send'],
          ['mdi-delete', 'Trash'],
          ['mdi-alert-octagon', 'Spam'],
        ],
      }),
      methods:{
        neverOpen(){
            console.log("NEVER OPEN!!")
        }
      }
    }
  </script>
  

 