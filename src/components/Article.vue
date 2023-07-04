<template>
    <div id="article" class="animate__animated animate__fadeInUp">
        <div id="article-list">
            <div id="article-list-header"><div style="flex: 1">全部博客</div><div style="flex: 1; text-align: right">共&nbsp;{{ this.articleList.length }}&nbsp;篇</div></div>
            <router-link class="article-list-item" v-for="item in this.articleList" :to="item.path">
                <div class="article-list-item-cover" :style="item.borderColor"><img :src="item.cover" alt=""></div>
                <div style="flex: 3; display: flex; flex-direction: column; justify-content: space-between">
                    <div style="display: flex; flex-direction: column">
                        <div class="article-list-item-title">{{ item.title }}</div>
                        <div class="article-list-item-describe">{{ item.describe }}</div>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between">
                        <div style="display: flex">
                            <div class="article-list-item-author"><img src="/icon/编辑姓名_edit-name.svg" alt="" class="article-list-item-icon">{{ item.author }}</div>
                            <div class="article-list-item-updateTime"><img src="/icon/日程表_schedule.svg" alt="" class="article-list-item-icon">{{ item.updateTime }}</div>
<!--                            <div class="article-list-item-view"><img src="/icon/预览-打开_preview-open.svg" alt="" class="article-list-item-icon">{{ item.view }}</div>-->
<!--                            <div class="article-list-item-comment"><img src="/icon/消息-置灰.svg" alt="" class="article-list-item-icon">{{ item.comment }}</div>-->
                        </div>
                        <div class="article-list-item-classification"><img src="/icon/文件夹-开_folder-open.svg" alt="" class="article-list-item-icon">{{ item.classification }}</div>
                    </div>
                </div>
            </router-link>
        </div>
        <div id="article-sidebar">
            <div id="article-sidebar-classification">
                <div id="article-sidebar-classification-title">分类</div>
                <div class="article-sidebar-classification-item" v-for="item in classifications">
                    <div style="border-top: 1px solid rgba(128,128,128,.8); width: 100%; margin: 14px 0"></div>
                    <div style="display: flex; justify-content: space-between; font-family: 站酷仓耳渔阳体-03, fangsong">
                        <img :src="item.cover" alt="" style="width: 48px; border-radius: 25px">
                        <div style="display: flex; flex-direction: column; justify-content: center; margin-left: 16px; justify-self: flex-start">{{ item.name }}</div>
                        <div style="display: flex; flex-direction: column; justify-content: center; margin-left: auto">{{ item.total }}</div>
                    </div>
                </div>
            </div>
            <div id="article-tags">

            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {tsToDate} from "../expand/utils.js";

export default {
    name: "Article",
    data() {
        return {
            articleList: '',
            classifications: []
        }
    },
    methods: {
        async readArticleList() {
            let articleList
            await axios({
                url: "/pages/articles/directory.json",
                method: "GET",
            }).then((res) => {
                articleList = res.data
            })
            for (let index in articleList) {
                articleList[index].path = "/article/" + articleList[index].filename + "_" + articleList[index].updateTime
                articleList[index].updateTime = tsToDate(articleList[index].updateTime).split(' ')[0]
                articleList[index].borderColor = 'border: 1px solid ' + articleList[index].borderColor
            }
            this.articleList = articleList
            return articleList
        },
        async readClassifications() {
            await axios({
                url: "/pages/articles/classifications.json",
                method: "GET"
            }).then((res) => {
                this.classifications = res.data
            })
            console.log(this.classifications)
        }
    },
    mounted() {
        this.readArticleList()
        this.readClassifications()
    }
}
</script>

<style scoped>
    #article {
        display: flex;
        width: 60%;
        margin: 28px auto 0;
        justify-content: center;
    }

    #article-list {
        flex: 9;
        margin-right: 32px;
        display: flex;
        flex-direction: column;
        background-color: rgba(245, 245, 245, 0.95);
        backdrop-filter: blur(15px);
        padding: 12px;
        border-radius: 5px;
    }

    #article-list-header {
        display: flex;
        justify-content: space-between;
        font-family: 站酷仓耳渔阳体-05, fangsong;
        font-size: x-large;
        padding: 6px 12px
    }

    .article-list-item {
        display: flex;
        margin: 12px 0;
        padding-top: 24px;
        min-height: 120px;
        font-family: 站酷仓耳渔阳体-01, fangsong;
        border-top: 1px solid orange;
    }

    a, a:visited {
        text-decoration: none;
        color: black;
    }

    .article-list-item-cover {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 32px;
        border-radius: 5px;
    }

    .article-list-item-cover img {
        width: 100%;
    }

    .article-list-item-title {
        font-family: 站酷仓耳渔阳体-03, fangsong;
        font-size: x-large;
        margin-bottom: 12px;
    }

    .article-list-item-describe {
        font-size: large;
    }

    .article-list-item-author {
        font-weight: bold;
        margin-right: 12px;
        color: #1E90FF;
        justify-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-list-item-updateTime {
        color: #b0b0b0;
        font-weight: lighter;
        margin-right: 12px;
        justify-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-list-item-view {
        color: #b0b0b0;
        font-weight: lighter;
        margin-right: 6px;
        justify-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-list-item-comment {
        color: #b0b0b0;
        font-weight: lighter;
        margin-right: 6px;
        justify-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-list-item-classification {
        background-color: white;
        color: #1E90FF;
        padding: 5px 10px;
        border-radius: 6px;
        align-self: flex-end;
        justify-self: flex-end;
        margin-right: 12px;
    }

    .article-list-item-icon {
        height: 16px;
        margin-right: 3px;
    }

    #article-sidebar {
        flex: 4;
        display: flex;
        flex-direction: column;
    }

    #article-sidebar-classification {
        padding: 18px 24px;
        background-color: rgba(245, 245, 245, 0.85);
        backdrop-filter: blur(15px);
        border-radius: 5px;
        font-size: x-large;
    }

    #article-sidebar-classification-title {
        font-family: 站酷仓耳渔阳体-05, fangsong;
        font-size: x-large;
        margin-bottom: 32px;
    }

    .article-sidebar-classification-item {
        font-family: 站酷仓耳渔阳体-03, fangsong;
        font-size: 18px;
    }
</style>