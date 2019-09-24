<template>
  <div class="poemAppreciation">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <el-row slot="header" class="clearfix" type="flex">
        <el-col justify="start" :xs="6" :sm="6" :md="6">最新诗词</el-col>
        <el-col :xs="14" :sm="14" :md="14" class="hidden-md-and-up">&nbsp;</el-col>
        <el-col justify="end" :xs="4" :sm="4" :md="4" class="hidden-md-and-up">按钮</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }" v-for="(item,index) in poems" :key = "index">
      <div class="sectionBody">
        <div>
          <div><img src="../../../public/static/img/lishangyin.jpg"></div>
          <div style="padding: 14px;">
            <h3>{{item.title}}</h3>
            <p><strong>{{item.author}}</strong></p>
            <pre>{{item.content}}</pre>
          </div>
        </div>
      </div>
    </el-card>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'poemAppreciation',
  data () {
    return {
      poems: []
    }
  },
  created () {
    this.axios.get('/static/poemAppreciation.json').then((response) => {
      let poems = response.data
      for (let i = 0; i < poems.length; i++) {
        if (poems[i].type === 'poem') {
          if (poems[i].content.length === 64) { // 七律
            poems[i].content = `
    ${poems[i].content.slice(0, 16)}
    ${poems[i].content.slice(16, 32)}
    ${poems[i].content.slice(32, 48)}
    ${poems[i].content.slice(48, 64)}
            `
          } else if (poems[i].content.length === 32) { // 七绝
            poems[i].content = `
    ${poems[i].content.slice(0, 8)}
    ${poems[i].content.slice(8, 16)}
    ${poems[i].content.slice(16, 24)}
    ${poems[i].content.slice(24, 32)}
            `
          } else if (poems[i].content.length === 24) { // 五绝
            poems[i].content = `
    ${poems[i].content.slice(0, 6)}
    ${poems[i].content.slice(6, 12)}
    ${poems[i].content.slice(12, 18)}
    ${poems[i].content.slice(18, 24)}
            `
          } else if (poems[i].content.length === 48) { // 五律
            poems[i].content = `
    ${poems[i].content.slice(0, 12)}
    ${poems[i].content.slice(12, 24)}
    ${poems[i].content.slice(24, 36)}
    ${poems[i].content.slice(36, 48)}
            `
          }
        }
      }
      this.poems = poems
    })
  }
}
</script>
<style scoped>
/* 主容器 */
.poemAppreciation{
  flex: 0.7;
  height: auto;
  padding-bottom: 15px;
  background-color: #fff;
}
/* element相关样式 */
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
/* 内容盒子 */
.sectionBody{
  height: 300px;
  display: flex;
  align-items: center;
}
.sectionBody>div{
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex: 1;
}
.sectionBody>div>div{
  flex:0.5;
}
.sectionBody>div>div:first-of-type{
  display: flex;
  align-items: center;
}
.sectionBody>div>div:first-of-type>img{
  margin: 0 auto;
  width: 250px;height: auto;
}
pre{
  font-size: 18px;
  margin-left: -30px;
}
/* 分页 */
.el-pagination{
  margin-top: 15px;
}
/* 多端适配响应式 */
@media screen and (max-width: 992px){
  .poemAppreciation{
    flex: 0.8;
    margin: 50px auto 60px;
  }
}
@media screen and (max-width: 768px){
  .sectionBody>div{
    width: auto;
  }
}
</style>
