<template>
    <div id="essay-page" class="animate__animated animate__fadeInUp">
        <div id="essay-page-title">{{ page.title }}</div>
        <div id="essay-page-info">
            <div style="flex: 1"></div>
            <div style="flex: 2; text-align: center; font-size: x-large;  font-family: 站酷仓耳渔阳体-03,serif">{{ page.describe }}</div>
            <div style="flex: 1; text-align: right; font-family: 站酷仓耳渔阳体-03,serif">生产日期:{{ page.updateTime }}</div>
        </div>
        <div id="essay-page-cover" style="flex: 1"><img :src="page.cover" alt=""></div>
        <div id="essay-page-content">
            <div v-html="page.content"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {tsToDate} from "../../expand/utils.js";

export default {
    name: "EssayPage",
    data() {
        return {
            path: "",
            page: {}
        }
    },
    methods: {
        async readEssay() {
            let page
            await axios({
                url: "/pages/essay/" + this.path + ".json",
                method: "GET"
            }).then((res) => {
                page = res.data
            })
            page.updateTime = tsToDate(page.updateTime).split(' ')[0]
            page.author = 'WhiteLeaf03'
            this.page = page
        }
    },
    mounted() {
        this.path = this.$route.params.path
        this.readEssay()
        h2.log(this.page)
    }
}
</script>

<style scoped>
#essay-page {
    display: flex;
    flex-direction: column;
    background-color: rgba(245, 245, 245, 0.95);
    width: 50%;
    margin: 28px auto;
    align-items: center;
    padding: 28px;
    border-radius: 5px;
}

#essay-page-title {
    font-family: 站酷仓耳渔阳体-05, fangsong;
    font-size: xxx-large;
    color: #1E90FF;
}

#essay-page-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

#essay-page-cover {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 14px;
}

#essay-page-cover img {
    width: 100%;
    border-radius: 5px;
}

#essay-page-content {
    margin-top: 28px;
    width: calc(100% - 28px);
}
</style>