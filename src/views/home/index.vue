<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="i in dingdanArr" :key="i.id">
        <div class="list-box">
          <div class="list-l">
            <img :src="i.img" />
          </div>
          <div class="list-r">
            <div>{{i.name}}</div>
            <div>{{i.count}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div id="mychart" class="mychart"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      dingdanArr: [
        {
          id: 1,
          name: "今日订单总量",
          img: require("@/assets/images/home_order.png"),
          count: 200
        },
        {
          id: 2,
          name: "今日销售总额",
          img: require("@/assets/images/home_order.png"),
          count: "￥5000"
        },
        {
          id: 3,
          name: "昨日销售总额",
          img: require("@/assets/images/home_order.png"),
          count: "￥3000"
        }
      ],
      options : {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }
    }
  },

   mounted() {
     this.drawLine();
   },
  methods:{
    drawLine(){
      let mychart =this.$echarts.init(document.getElementById('mychart'))
      mychart.setOption(this.options)
    }
  }

};
</script >

<style >
.list-box{
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;}
.list-l {

}
  img {
    width: 50px;
  }
.mychart{
  width: 600px;
  height: 400px;
}
</style>
