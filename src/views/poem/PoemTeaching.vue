<template>
  <div class="poemTeaching">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <el-row slot="header" class="clearfix" type="flex">
        <el-col justify="start" :xs="6" :sm="6" :md="6">诗词教程</el-col>
        <el-col :xs="14" :sm="14" :md="14" class="hidden-md-and-up">&nbsp;</el-col>
        <el-col justify="end" :xs="4" :sm="4" :md="4" class="hidden-md-and-up">按钮</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }" v-for="(item,index) in poems" :key = "index">
      <div class="sectionBody">
        <div>
          <div></div>
          <div style="padding: 14px;">
            <h3>{{item.title}}</h3>
            <p><strong>{{item.author}}</strong></p>
            <p>{{item.content}}</p>
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
  name: 'poemTeaching',
  data () {
    return {
      poems: []
    }
  },
  created () {
    this.axios.get('/static/poemTeaching.json').then((response) => {
      let poems = response.data
      this.poems = poems
    })
  }
}
</script>
<style scoped>
/* 主容器 */
.poemTeaching{
  flex: 0.7;
  height: auto;
  margin-bottom: 50px;
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
.sectionBody>div>div:last-of-type p:last-of-type{
  max-width: 300px;max-height: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 30px;
  font-size: 18px;
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
