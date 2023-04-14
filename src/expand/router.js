import * as VueRouter from 'vue-router'
import Index from "../components/Index.vue";
import Article from "../components/Article.vue";
import ArticlePage from "../components/pages/ArticlePage.vue";

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/article',
        component: Article
    },
    {
        path: '/article/:path',
        component: ArticlePage
    }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})