<template>
    <div id="about">
        <div id="about-header">
            <div style="font-size: xxx-large">关于我</div>
            <div style="font-size: large">Upload Date: 2023.4.26</div>
        </div>
        <div id="about-content">
            <h2>你好，这里是WhiteLeaf03，也可以叫我白叶</h2>
            <h2>是在校大学生，不久后就要变成社畜了(悲</h2>
            <h2>兴趣爱好是动漫，游戏，编程</h2>
            <h2>大一开始接触打艺，也爬过几次台，但现在已经正式退役了</h2>
            <h2>高中时的梦想是去上海上大学，在上海工作，养一直可爱的小猫</h2>
            <h2>梦想很美好，但现实很残酷</h2>
            <h2>目前在浙江宁波读书，大四打算回老家找工作</h2>
            <h2>压力一大就会有各种奇奇怪怪的念头</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>
#about {
    min-height: calc(100vh - 60px - 56px);
    display: flex;
    flex-direction: column;
    height: max-content;
    margin: 28px;
    background-color: rgba(50, 50, 50, 0.3);
}

#about-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
}

#about-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    margin: 28px auto 0;
    width: auto;
}
</style>