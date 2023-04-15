<template>
    <div id="message" class="animate__animated animate__fadeInUp">
        <div id="message-comment">
            <div id="message-comment-avatar"><img src="/images/touch-fish.png" alt=""></div>
            <div style="display: flex; width: 100%; flex-direction: column; min-height: 128px">
                <div style="display: flex; width: 100%; margin-bottom: 18px;">
                    <div style="flex: 1; display: flex; justify-content: center; align-items: center; background-color: #f5f5f5; border-radius: 5px; margin-right: 32px; height: 36px">
                        <div class="message-comment-tip">*昵称</div>
                        <input placeholder="必填" class="message-comment-input" v-model="nickname">
                    </div>
                    <div style="flex: 1; display: flex; justify-content: center; align-items: center; background-color: #f5f5f5; border-radius: 5px; margin-right: 32px; height: 36px">
                        <div class="message-comment-tip">*邮箱</div>
                        <input placeholder="必填" class="message-comment-input" v-model="email">
                    </div>
                    <button @click="submitMessage">留言</button>
                </div>
                <textarea placeholder="欢迎留言 OwO" v-model="content"></textarea>
            </div>
        </div>
        <div id="message-list">
            <div class="message-list-item" v-for="item in this.messageList">
                <div style="display: flex; align-items: center; justify-content: center; margin: 32px 12px">
                    <div style="height: 1px; border-top: 1px solid gray; flex: 1"></div>
                    <div>我&nbsp;是&nbsp;分&nbsp;割&nbsp;线&nbsp;o.0</div>
                    <div style="height: 1px; border-top: 1px solid gray; flex: 1"></div>
                </div>
                <div style="display: flex">
                    <img src="/images/touch-fish.png" style="width: 56px; height: 56px; border: 3px orange solid; border-radius: 15px;" alt="">
                    <div style="margin-left: 16px; font-size: large; margin-top: 8px; font-weight: bolder; color: black">{{ item.nickname }}</div>
                    <div style="margin-left: 16px; font-size: large; margin-top: 8px">{{ item.updateTime }}</div>
                </div>
                <div style="margin-left: 76px; color: black" v-html="item.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {tsToDate} from "../expand/utils.js";

export default {
    name: "Message",
    data() {
        return {
            nickname: '',
            email: '',
            content: '',
            messageList: []
        }
    },
    methods: {
        async getMessageList() {
            let messageList = []
            await axios({
                url: "/api/message",
                method: "GET",
            }).then((res) => {
                messageList = res.data
            })
            if (messageList.msg === 'OK') {
                messageList = messageList.data
                for (let index in messageList) {
                    messageList[index].updateTime = tsToDate(messageList[index].updateTime).split(' ')[0]
                    messageList[index].content = '&nbsp;&nbsp;&nbsp;&nbsp;' + messageList[index].content
                }
                this.messageList = messageList
            }
        },
        async submitMessage() {
            if (this.nickname !== '' && this.email !== '' && this.content !== '') {
                let result
                await axios({
                    url: "/api/message",
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                        nickname: this.nickname,
                        email: this.email,
                        content: this.content
                    })
                }).then((res) => {
                    result = res.data
                })
                if (result.msg === 'OK') {
                    alert('评论成功')
                    this.nickname = ''
                    this.email = ''
                    this.content = ''
                    await this.getMessageList()
                } else {
                    alert('评论失败')
                }
            }
        }
    },
    mounted() {
        this.getMessageList()
    }
}
</script>

<style scoped>
#message {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 28px auto;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 28px;
    border-radius: 15px;
}

#message-comment {
    display: flex;
}

#message-comment-avatar {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    margin-right: 16px;
}

#message-comment-avatar img {
    width: 100%;
    height: 100%;
    border: 3px orange solid;
    border-radius: 15px;
}

.message-comment-tip {
    width: 15%;
    text-align: center;
    font-family: 站酷仓耳渔阳体-03, fangsong;
}

.message-comment-input {
    height: 100%;
    width: 100%;
    padding: 0 10px;
    border: none;
    background-color: rgba(240, 240, 240, 0.09);
    border-radius: 5px;
}

input:focus {
    outline: none;
}

textarea {
    min-height: 48px;
    line-height: 16px;
    resize: none;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: rgba(240, 240, 240, 0.95);
    padding: 12px;
}

textarea:focus {
    outline: none;
    border: none;
    background-color: rgba(240, 240, 240, 0.95);
}

button {
    width: 84px;
    background-color: rgba(240, 240, 240, 0.95);
    border: none;
    border-radius: 5px;
    font-family: 站酷仓耳渔阳体-03, fangsong;
    font-size: large;
}

button:active {
    background-color: rgba(240, 240, 240, 0.95);
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2), 0 17px 50px 0 rgba(0,0,0,0.2);
}

#message-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
}

.message-list-item {
    font-family: 站酷仓耳渔阳体-03, fangsong;
    color: gray;
}
</style>