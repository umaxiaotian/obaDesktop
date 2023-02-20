export default defineNuxtConfig({
    ssr: false,
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css",
    ],
    app: {
        head: {
          title: 'obaDesktop',
          meta: [{ name: 'description', content: 'WEB上で使用できるウィンドウコンポーネントです' }],
        },
      },
    runtimeConfig: {
        public: {
            RELEASE_DATE: process.env.RELEASE_DATE
        }
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },

})
