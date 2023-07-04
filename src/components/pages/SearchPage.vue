<template>
    <div id="search-page" class="animate__animated animate__fadeInUp">
        <div id="search-result" v-if="result.total === 0">
            <p>坏了！啥也没有呀！(╯°□°）╯</p>
            <p style="margin: 16px 0">不如趁此机会摸会鱼吧XD</p>
            <img src="/images/touch-fish.png" alt="">
        </div>
        <div id="search-result" v-if="result.total !== 0">共找到{{ result.total }}个结果</div>
        <router-link class="article-list-item" v-for="article in result.articleList" :to="article.path">
            <div class="article-list-item-cover" :style="article.borderColor"><img :src="article.cover" alt=""></div>
            <div style="flex: 3; display: flex; flex-direction: column; justify-content: space-between">
                <div style="display: flex; flex-direction: column">
                    <div class="article-list-item-title">{{ article.title }}</div>
                    <div class="article-list-item-describe">{{ article.describe }}</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between">
                    <div style="display: flex">
                        <div class="article-list-item-author"><img src="/icon/编辑姓名_edit-name.svg" alt="" class="article-list-item-icon">{{ article.author }}</div>
                        <div class="article-list-item-updateTime"><img src="/icon/日程表_schedule.svg" alt="" class="article-list-item-icon">{{ article.updateTime }}</div>
<!--                        <div class="article-list-item-view"><img src="/icon/预览-打开_preview-open.svg" alt="" class="article-list-item-icon">{{ item.view }}</div>-->
<!--                        <div class="article-list-item-comment"><img src="/icon/消息-置灰.svg" alt="" class="article-list-item-icon">{{ item.comment }}</div>-->
                    </div>
                    <div class="article-list-item-classification"><img src="/icon/文件夹-开_folder-open.svg" alt="" class="article-list-item-icon">{{ article.classification }}</div>
                </div>
            </div>
        </router-link>
        <router-link class="article-list-item" v-for="essay in result.essayList" :to="essay.path">
            <div class="article-list-item-cover" :style="essay.borderColor"><img :src="essay.cover" alt=""></div>
            <div style="flex: 3; display: flex; flex-direction: column; justify-content: space-between">
                <div style="display: flex; flex-direction: column">
                    <div class="article-list-item-title">{{ essay.title }}</div>
                    <div class="article-list-item-describe">{{ essay.describe }}</div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between">
                    <div style="display: flex">
                        <div class="article-list-item-author"><img src="/icon/编辑姓名_edit-name.svg" alt="" class="article-list-item-icon">WhiteLeaf03</div>
                        <div class="article-list-item-updateTime"><img src="/icon/日程表_schedule.svg" alt="" class="article-list-item-icon">{{ essay.updateTime }}</div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";
import {tsToDate} from "../../expand/utils.js";
import article from "../Article.vue";

export default {
    name: "search-page",
    computed: {
        article() {
            return article
        }
    },
    data() {
        return {
            key: this.$route.params.key,
            result: {
                total: 0,
                articleList: [],
                essayList: []
            }
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
                if (articleList[index].title.includes(this.key)) {
                    articleList[index].path = "/article/" + articleList[index].filename + "_" + articleList[index].updateTime
                    articleList[index].updateTime = tsToDate(articleList[index].updateTime).split(' ')[0]
                    articleList[index].borderColor = 'border: 1px solid ' + articleList[index].borderColor
                    this.result.articleList.push(articleList[index])
                }
            }
            this.result.total += this.result.articleList.length
        },
        async readEssayList() {
            let essayList
            await axios({
                url: "/pages/essay/directory.json",
                method: "GET"
            }).then((res) => {
                essayList = res.data
            })
            for (let index in essayList) {
                if (essayList[index].title.includes(this.key)) {
                    essayList[index].path = "/essay/" + essayList[index].filename + "_" + essayList[index].updateTime
                    essayList[index].updateTime = tsToDate(essayList[index].updateTime).split(' ')[0]
                    this.result.essayList.push(essayList[index])
                }
            }
            this.result.total += this.result.essayList.length
        }
    },
    mounted() {
        this.result = {
            total: 0,
            articleList: [],
            essayList: []
        }
        this.readArticleList()
        this.readEssayList()
    }
}
</script>

<style scoped>
#search-page {
    display: flex;
    flex-direction: column;
    background-color: rgba(245, 245, 245, 0.95);
    width: 50%;
    margin: 28px auto;
    align-items: center;
    padding: 28px;
    border-radius: 5px;
}

#search-result {
    font-family: 站酷仓耳渔阳体-03, fangsong;
    text-align: center;
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

#divider {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 16px 0;
}

.divider-line {
    width: 100%;
    height: 3px;
    background-color: #2d2d2d;
    min-width: 32px;
    display: flex;
}
</style>