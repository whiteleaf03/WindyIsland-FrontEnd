<template>
    <div id="index" class="animate__animated animate__fadeIn">
        <div id="welcome">
            <div id="title">欢迎来到WhiteLeaf03の个人博客</div>
            <div id="describe">这是我分享编程笔记、日常生活、个人喜好的博客 偶尔也会发发癫...</div>
        </div>
        <div id="introduce">
            <div id="avatar"></div>
            <div id="dream">一枚渣渣程序员<br>梦想是在上海当社畜和养只猫</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Index",
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<style scoped>
#index {
    min-height: calc(100vh - 60px - 56px);
    display: flex;
    flex-direction: column;
    height: max-content;
    margin: 28px;
    background-color: rgba(50, 50, 50, 0.3);
}

#welcome {
    display: flex;
    flex-direction: column;
    width: 100%;
}

#title {
    margin: 96px auto 0;
    color: whitesmoke;
    font-family: 站酷仓耳渔阳体-05, fangsong;
    font-size: xxx-large;
    border: 2px solid whitesmoke;
    padding: 12px 24px;
}

#describe {
    color: whitesmoke;
    font-family: 站酷仓耳渔阳体-03, fangsong;
    font-size: x-large;
    margin: 32px auto 0;
}

#introduce {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
}

#avatar {
    width: 104px;
    height: 104px;
    background-image: url("/images/avatar.jpg");
    background-size: cover;
    border-radius: 1000px;
    border: 3px solid whitesmoke;
    margin-right: 32px;
    animation: spin 10s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

#dream {
    text-align: center;
    font-family: 站酷仓耳渔阳体-02, fangsong;
    font-size: large;
    color: whitesmoke;
    position: relative;
    top: -1px;
}
</style>