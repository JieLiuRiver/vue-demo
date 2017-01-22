import Vue from 'vue';
import store from './vuex/store';
import App from './components/App.vue';
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import iView from 'iview';


Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(iView);

let router = new vueRouter();


new Vue({
    store,
    el: 'body',
    components: {
        App
    }
});