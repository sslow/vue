<template>
  <div class="charts">
    <div class="crumbs">
      <el-breadcrumb separator="\">
        <el-breadcrumb-item><i class="el-icon-refresh"></i>schart图表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container clearfix">
      <div class="schart-box">
        <h2>柱状图</h2>
        <vue-chart class="schart" canvasId="bar" :data="data1" type="bar" :options="options1"></vue-chart>
      </div>
      <div class="schart-box">
        <h2>饼状图</h2>
        <vue-chart class="schart" canvasId="pie" :data="data2" type="pie" :options="options3"></vue-chart>
      </div>
      <div class="schart-box">
        <h2>折线图</h2>
        <vue-chart class="schart" canvasId="line" :data="data1" type="line" :options="options2"></vue-chart>
      </div>
      <div class="schart-box">
        <h2>环形图</h2>
        <vue-chart class="schart" canvasId="ring" :data="data2" type="ring" :options="options4"></vue-chart>
      </div>
    </div>
    <div>访问地址：<a href="https://github.com/lin-xin/vue-schart" target="_blank">vue-schart</a></div>
  </div>
</template>
<script>
import VueChart from 'vue-schart'
export default {
  components: { VueChart },
  data() {
    return {
      data1: [
        { name: '2012', value: 1141 },
        { name: '2013', value: 1499 },
        { name: '2014', value: 2260 },
        { name: '2015', value: 1170 },
        { name: '2016', value: 970 },
        { name: '2017', value: 1450 }
      ],
      data2: [
        { name: '短袖', value: 1200 },
        { name: '休闲裤', value: 1222 },
        { name: '连衣裙', value: 1283 },
        { name: '外套', value: 1314 },
        { name: '羽绒服', value: 2314 }
      ],
      options1: {
        title: '某商店近年营业总额',
        autoWidth: true, // 设置宽高自适应
        showValue: false,
        bgColor: '#F9EFCC',
        fillColor: '#00887C',
        contentColor: 'rgba(46,199,201,0.3)',
        yEqual: 7
      },
      options2: {
        title: '某商店近年营业总额',
        bgColor: '#D5E4EB',
        titleColor: '#00887C',
        fillColor: 'red',
        contentColor: 'rgba(46,199,201,0.3)'
      },
      options3: {
        title: '某商店各商品年度销量',
        bgColor: '#829dca',
        titleColor: '#ffffff',
        legendColor: '#ffffff',
        radius: 120
      },
      options4: {
        title: '某商店各商品年度销量',
        bgColor: '#829daa',
        titleColor: '#ffffff',
        legendColor: '#ffffff',
        radius: 120,
        innerRadius: 80
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-side {
  float: left
}

.schart {
  width: 600px;
  height: 400px;
}

.charts .container{
  padding: 20px;
}

h2 {
  text-align: center;
  color: #155e8c
}

.schart-box {
  margin: 20px;
  float: left;
}

</style>
