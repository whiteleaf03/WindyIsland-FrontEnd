<template>
    <div id="essay-page" class="animate__animated animate__fadeInUp">
        <div id="essay-page-title">{{ page.title }}</div>
        <div style="display: flex; margin-top: 28px">
            <div id="essay-page-cover" style="flex: 1"><img :src="page.cover" alt=""></div>
            <div style="flex: 1; display: flex; flex-direction: column; padding: 28px 14px; justify-content: center; align-items: center; text-align: center">
                <div style="display: flex; align-items: center; justify-content: center; flex: 1">
                    <div id="essay-page-author"><div style="font-size: xx-large; color: black; font-weight: bolder">AUTHOR</div><div>{{ page.author }}</div></div>
                    <div id="essay-page-updateTime"><div style="font-size: xx-large; color: black; font-weight: bolder">DATE</div>{{ page.updateTime }}</div>
                </div>
                <div id="essay-page-describe" v-html="page.describe"></div>
            </div>
        </div>
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
            page.describe = '<div style="font-size: xx-large; color: black; font-weight: bolder">DESCRIBE</div>' + page.describe
            page.author = 'WhiteLeaf03'
            this.page = page
        }
    },
    mounted() {
        this.path = this.$route.params.path
        this.readEssay()
        console.log(this.page)
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

#essay-page-author {
    font-family: 站酷仓耳渔阳体-02, fangsong;
    font-size: large;
    color: #ffa500;
    margin: 0 48px 24px;
}

#essay-page-updateTime {
    font-family: 站酷仓耳渔阳体-02, fangsong;
    font-size: large;
    color: #ffa500;
    margin: 0 48px 24px;
}

#essay-page-describe {
    flex: 3;
    font-family: 站酷仓耳渔阳体-02, fangsong;
    font-size: large;
    color: #ffa500;
}

#essay-page-content {
    margin-top: 28px;
    width: calc(100% - 28px);
}
</style>