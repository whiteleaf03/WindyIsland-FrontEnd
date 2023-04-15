import * as VueRouter from 'vue-router'
import Index from "../components/Index.vue";
import Article from "../components/Article.vue";
import ArticlePage from "../components/pages/ArticlePage.vue";
import Essay from "../components/Essay.vue";
import EssayPage from "../components/pages/EssayPage.vue";
import Message from "../components/Message.vue";

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
    },
    {
        path: '/essay',
        component: Essay
    },
    {
        path: '/essay/:path',
        component: EssayPage
    },
    {
        path: '/message',
        component: Message
    }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})