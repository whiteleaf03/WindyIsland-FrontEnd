<template>
    <div id="article-page" class="animate__animated animate__fadeInUp">
        <div id="article-page-title">{{ page.title }}</div>
        <div style="display: flex; margin-top: 28px">
            <div id="article-page-cover" style="flex: 1"><img :src="page.cover" alt=""></div>
            <div style="flex: 1; display: flex; flex-direction: column; padding: 28px 14px; justify-content: center; align-items: center">
                <div id="article-page-author">AUTHOR:&nbsp;{{ page.author }}</div>
                <div id="article-page-updateTime">DATE:&nbsp;{{ page.updateTime }}</div>
                <div id="article-page-describe">DESCRIBE:&nbsp;{{ page.describe }}</div>
                <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
            </div>
        </div>
        <div id="article-page-content">
            <div v-html="page.content"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {prismCode, tsToDate} from "../../expand/utils.js";

export default {
    name: "ArticlePage",
    data() {
        return {
            path: "",
            page: {}
        }
    },
    methods: {
        async readPage() {
            let page
            await axios({
                url: "/pages/" + this.path + ".json",
                method: "GET"
            }).then((res) => {
                page = res.data
            })
            page.updateTime = tsToDate(page.updateTime).split(' ')[0].replaceAll('-', '/')
            this.page = page
            prismCode()
        }
    },
    mounted() {
        this.path = this.$route.params.path
        this.readPage()
        console.log(this.page.cover)
    }
}
</script>

<style scoped>
    #article-page {
        display: flex;
        flex-direction: column;
        background-color: rgba(245, 245, 245, 0.95);
        width: 50%;
        margin: 28px auto;
        align-items: center;
        padding: 28px;
        border-radius: 5px;
    }

    #article-page-title {
        font-family: 站酷仓耳渔阳体-05, fangsong;
        font-size: xxx-large;
        color: #1E90FF;

    }

    #article-page-cover {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: 14px;
    }

    #article-page-cover img {
        width: 100%;
        border-radius: 5px;
    }

    #article-page-author {
        font-family: 站酷仓耳渔阳体-02, fangsong;
        font-size: x-large;
        color: #ffa500;
    }

    #article-page-updateTime {
        font-family: 站酷仓耳渔阳体-02, fangsong;
        font-size: x-large;
        margin-top: 18px;
        color: #ffa500;
    }

    #article-page-describe {
        font-family: 站酷仓耳渔阳体-02, fangsong;
        font-size: x-large;
        margin-top: 18px;
        color: #ffa500;
    }

    #article-page-content {
        margin-top: 28px;
        width: calc(100% - 28px);
    }
</style>