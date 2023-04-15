<template>
    <div id="essay" class="animate__animated animate__fadeInUp">
        <div id="timeline">
            <div class="timeline-item" v-for="item in this.essayList">
                <div style="display: flex; align-items: center; width: 100%">
                    <div class="timeline-point"></div>
                    <div class="timeline-date">{{ item.updateTime }}</div>
                </div>
                <div style="width: 100%; display: flex; margin: -1px 0">
                    <div class="timeline-line"></div>
                    <router-link :to="item.path" class="timeline-content">
                            <img :src="item.cover" style="flex: 1; width: 20vw" alt="">
                            <div style="flex: 3">
                                <div class="timeline-content-title">{{ item.title }}</div>
                                <div class="timeline-content-describe" v-html="item.describe"></div>
                            </div>
                    </router-link>
                </div>
            </div>
            <div style="display: flex; align-items: center; width: 100%; margin-bottom: 32px">
                <div class="timeline-point"></div>
                <div class="timeline-date" style="font-family: 站酷仓耳渔阳体-05, fangsong;">到底啦~</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios, {formToJSON} from "axios";
import {tsToDate} from "../expand/utils.js";

export default {
    name: "Essay",
    data() {
        return {
            essayList: []
        }
    },
    methods: {
        async readEssayList() {
            let essayList
            await axios({
                url: "/pages/essay/directory.json",
                method: "GET"
            }).then((res) => {
                essayList = res.data
            })
            for (let index in essayList) {
                essayList[index].path = "/essay/" + essayList[index].title + "_" + essayList[index].updateTime
                essayList[index].updateTime = tsToDate(essayList[index].updateTime).split(' ')[0]
            }
            this.essayList = essayList
            console.log(essayList)
        }
    },
    mounted() {
        this.readEssayList()
    }
}
</script>

<style scoped>
#essay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin: 28px auto 0;
    height: max-content;
    min-height: 320px;
}

#timeline {
    display: flex;
    flex-direction: column;
}

.timeline-item {
    display: flex;
    flex-direction: column;
}

.timeline-point {
    width: 16px;
    height: 16px;
    border-radius: 25px;
    background-color: orange;
    margin: 16px 32px;
}

.timeline-date {
    padding: 6px 28px;
    font-family: 站酷仓耳渔阳体-05, fangsong;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.5), 0 17px 50px 0 rgba(0,0,0,0.5);
    border-radius: 5px;
}

.timeline-line {
    width: 2px;
    background-color: orange;
    margin: 0 calc(24px + 15px);
}

.timeline-content {
    display: flex;
    padding: 0;
    background-color: white;
    width: 100%;
    margin: 32px 0;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.5), 0 32px 50px 0 rgba(0,0,0,0.5);
    border-radius: 5px;
}

a, a:visited {
    color: black;
    text-decoration: none;
}

.timeline-content > img {
    flex: 2;
    border-radius: 5px;
}

.timeline-content-title {
    font-family: 站酷仓耳渔阳体-05, fangsong;
    font-size: xx-large;
    padding: 0 28px;
    margin: 14px 0;
}

.timeline-content-describe {
    padding: 0 28px;
    margin: 14px 0;
    line-height: 32px;
}
</style>