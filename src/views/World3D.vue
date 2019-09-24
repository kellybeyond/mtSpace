<template>
  <div class="world3D">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <el-row slot="header" class="clearfix" type="flex">
        <el-col justify="start" :xs="6" :sm="6" :md="6">World3D</el-col>
        <el-col :xs="14" :sm="14" :md="14" class="hidden-md-and-up">&nbsp;</el-col>
        <el-col justify="end" :xs="4" :sm="4" :md="4" class="hidden-md-and-up">按钮</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="sectionBody">
        <div>
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="sectionBody">
        <div>
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="sectionBody">
        <div>
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'world3D'
}
</script>
<style scoped>
/* 主容器 */
.world3D{
  flex: 0.7;
  height: auto;
  margin-bottom: 50px;
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
  background-color: pink;
  display: flex;
}
.sectionBody>div>div,.sectionBody>div>img{
  flex:0.5;
}
/* 多端适配响应式 */
@media screen and (max-width: 992px){
  .world3D{
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
