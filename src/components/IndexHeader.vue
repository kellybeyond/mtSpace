<template>
  <div class="indexHeader">
    <nav>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="3" :md="8" :lg="11" :xl="11" class="logo">
          <el-row type="flex">
            <el-col class="hidden-sm-and-up" justify="start">left</el-col>
            <el-col><router-link to="/"><img src="../assets/logo.png" alt="修"></router-link></el-col>
            <el-col class="hidden-sm-and-up" justify="end">right</el-col>
          </el-row>
        </el-col>
        <el-col :xs="0" :sm="21" :md="16" :lg="13" :xl="13">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
            <!-- <el-menu-item index="2"><router-link to="/poem">Poem</router-link></el-menu-item> -->
            <el-submenu index="2">
              <template slot="title">Poem</template>
              <el-menu-item index="2-1"><router-link to="/poem/poemTeaching">诗词教程</router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link to="/poem/poemAppreciation">诗词鉴赏</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/music">Music</router-link></el-menu-item>
            <el-submenu index="4">
              <template slot="title"><router-link to="/blog">Blog</router-link></template>
              <el-menu-item index="4-1"><router-link to="/blog/blog_git">Git</router-link></el-menu-item>
              <el-submenu index="4-2">
                <template slot="title">前端</template>
                <el-menu-item index="4-2-1"><router-link to="/blog/blog_javascript">Javascript</router-link></el-menu-item>
                <el-menu-item index="4-2-2"><router-link to="/blog/blog_css">Css</router-link></el-menu-item>
                <el-menu-item index="4-2-3"><router-link to="/blog/blog_html">Html</router-link></el-menu-item>
                <el-menu-item index="4-2-4"><router-link to="/blog/blog_vue">Vue</router-link></el-menu-item>
                <el-menu-item index="4-2-5"><router-link to="/blog/blog_react">React</router-link></el-menu-item>
              </el-submenu>
              <el-menu-item index="4-3"><router-link to="/blog/blog_node">Node</router-link></el-menu-item>
              <el-menu-item index="4-4"><router-link to="/blog/blog_webpack">Webpack</router-link></el-menu-item>
              <el-menu-item index="4-5"><router-link to="/blog/blog_ecmascript">ECMAScript</router-link></el-menu-item>
              <el-menu-item index="4-6"><router-link to="/blog/blog_netSecurity">网络安全</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="5"><router-link to="/world3D">3D World</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/game">Game</router-link></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </nav>
    <!-- <el-row id="breadcrumb" class="hidden-xs-only">
      <el-col :xs="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
// import router from '../router'
export default {
  name: 'indexHeader',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
/* 主容器 */
.indexHeader{
  position: fixed;
  height: auto;width: 100%;
  background-color: white;
  z-index: 999;
}
/* element */
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.el-menu-demo{
  border-bottom: none;
  margin: 0 auto;
  min-width: 670px;
}
.el-breadcrumb{
  margin: 0 auto;
  width: fit-content;
}
/* 导航栏 */
nav{
  margin-top: 20px;
  /* background-color: yellow; */
  padding: 0;
}
nav ul{
  padding:0;
}
nav li{
  padding:0;
}
nav a{
  text-decoration: none;
  padding: 20px 30px;
  color: gray;
}
/* 次级菜单项 */
ul[role="menu"] a{
  text-decoration: none;
  color: gray;
  display: block;
}
ul[role="menu"] li:hover{
  background-color: #ddd;
}
.logo{
  text-align: center;
}
/* 面包屑路径导航 */
#breadcrumb{
  background-color: #e6e6e6;
  height: 70px;
}
#breadcrumb span{
  line-height: 70px;
}
.el-breadcrumb__inner.is_link{
  color: lightblue;
}
@media screen and (max-width: 768px){
  nav{
    margin: 0;
  }
  .el-menu-demo{
    width: fit-content;
  }
}
</style>
