<template>
  <div class="indexAside">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="sectionBody">
        <div>
          侧边栏内容---全局搜索，日历，总访问量，小广告或其他内容
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'indexAside',
  data () {
    return {
      poems: []
    }
  },
  props: ['routeData']
}
</script>
<style scoped>
.indexAside{
  flex: 0.3;
  min-height: 800px;
  margin: 0px 0 50px 20px;
}
.box-card{
  min-width: 220px;
  height: 600px;
  /* background-color: #efefef; */
}
pre{
  font-size: 14px;
  margin-left: -100px;
}
.calendar{
  width: 100%;height: 350px;
}
@media screen and (max-width: 992px){
  .indexAside{
    display: none;
  }
}
</style>
