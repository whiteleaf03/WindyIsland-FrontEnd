<template>
    <div id="app">
        <header>
            <div id="logo">WhiteLeaf03</div>
            <div style="flex: 5; display: flex; width: 150%">
                <div id="menu">
                    <router-link class="menu-item" to="/index"><img class="menu-icon" alt="" src="/icon/首页-置灰.png">首页</router-link>
                    <router-link class="menu-item" to="/article"><img class="menu-icon" alt="" src="/icon/order.png">博文</router-link>
                    <router-link class="menu-item" to="/comment"><img class="menu-icon" alt="" src="/icon/message.png">留言</router-link>
                    <router-link class="menu-item" to="/about"><img class="menu-icon" alt="" src="/icon/user.png">关于我</router-link>
                </div>
                <div id="search">
                    <div id="input"><img src="/icon/search.png" alt=""><input placeholder="请输入内容"></div>
                </div>
            </div>
            <div id="user">
                <div style="flex: 3"></div>
                <div style="flex: 1;">登录</div>
                <div style="flex: 1;">注册</div>
                <div style="flex: 3"></div>
            </div>
        </header>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
    <footer>
        <div id="contact-title">联&nbsp;系&nbsp;我</div>
        <div class="contact-item">whiteleaf03@163.com</div>
        <div class="contact-item">2876202234@qq.com</div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
#app {
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

header {
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    height: 60px;
    align-items: center;
}

#logo {
    font-family: 站酷仓耳渔阳体-05, fangsong;
    font-size: 32px;
    color: whitesmoke;
    flex: 2;
    padding-left: 32px;
}

#menu {
    flex: 1;
    display: flex;
}

.menu-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    line-height: 32px;
    font-family: 站酷仓耳渔阳体-03, fangsong;
    font-size: large;
    color: whitesmoke;
}

a, a:visited {
    text-decoration: none;
    color: whitesmoke;
}

.menu-icon {
    width: 24px;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

#search {
    flex: 1;
    display: flex;
    justify-content: center;
}

#search #input {
    width: 60%;
    display: flex;
    justify-content: center;
    border: 1px solid whitesmoke;
    background-color: rgba(0, 0, 0, 0.2);
}

#search #input img {
    width: 24px;
    height: 24px;
    position: relative;
    top: 4px;
    margin: 0 8px;
}

#search #input input {
    flex: 1;
    border: none;
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0);
}

#search #input input:focus {
    outline: none;
}

::placeholder {
    color: whitesmoke;
}

#user {
    flex: 2;
    display: flex;
    height: 32px;
    line-height: 32px;
    font-family: 站酷仓耳渔阳体-03, fangsong;
    font-size: large;
    color: whitesmoke;
}

#content {

}

footer {
    width: 100%;
    background-color: rgba(128, 128, 128);
    text-align: center;
    padding: 32px 0;
}

footer #contact-title {
    color: whitesmoke;
    font-size: large;
    font-family: 站酷仓耳渔阳体-05, fangsong;
}

footer .contact-item {
    color: #c8c8c8;
    font-size: small;
    margin-top: 12px;
    font-family: 站酷仓耳渔阳体-05, fangsong;
}
</style>