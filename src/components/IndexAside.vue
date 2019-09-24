<template>
  <div class="indexAside">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <el-row slot="header" class="clearfix" type="flex">
        <el-col justify="start" :xs="6" :sm="6" :md="6">诗词推荐</el-col>
        <el-col :xs="14" :sm="14" :md="14" class="hidden-md-and-up">&nbsp;</el-col>
        <el-col justify="end" :xs="4" :sm="4" :md="4" class="hidden-md-and-up">按钮</el-col>
      </el-row>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }" v-for="(item,index) in poems" :key = "index">
      <div class="sectionBody">
        <div>
          <div style="padding: 14px;">
            <h3>{{item.title}}</h3>
            <p><strong>{{item.author}}</strong></p>
            <pre>{{item.content}}</pre>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'indexAside',
  data () {
    return {
      poems: []
    }
  },
  props: ['routeData'],
  watch: {
    routeData () {
      console.log(this.routeData)
      this.judgeRoute()
    }
  },
  mounted () {
    this.judgeRoute()
  },
  methods: {
    // 入口判断路由
    judgeRoute () {
      switch (this.routeData) {
        case 'poem/poemAppreciation':
          this.getAppreciationData()
          break
        default:
          this.poems = []
          break
      }
    },
    // 获取诗词鉴赏的数据并渲染
    getAppreciationData () {
      this.axios.get('/static/poemAsideAppreciation.json').then((response) => {
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
  /* background-color: #efefef; */
}
pre{
  font-size: 14px;
  margin-left: -100px;
}
@media screen and (max-width: 992px){
  .indexAside{
    display: none;
  }
}
</style>
