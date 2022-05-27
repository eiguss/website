import Vue from 'vue';

Vue.prototype.$goto = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}