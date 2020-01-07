window.Vue = require("vue");

Vue.component("blog-component", require("./components/Blog.vue").default);

const app = new Vue({
    el: "#app",
    data: {
        blogs: [0,1,2],
        year: new Date().getFullYear()
    },
});
