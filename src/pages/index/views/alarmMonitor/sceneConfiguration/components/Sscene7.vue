<template>
    <div :class="$style.secene">
        <el-button type="primary" @click="butChildClick1">tab2 子级获取图标数据</el-button>
        <echarts-common
            :loading="loading2"
            ref="echartsDemo"
            domId="echartsId2"
            :noClearFlag="true"
            :defaultOption="chartOptions2"
            :propsChartHeight="430">
        </echarts-common>
    </div>
</template>

<script>
// import {echartsData2} from '../components/components';
import EchartsCommon from '@/components/index/common/EchartsCommon';
export default {
    name: 'Echarts2',
    components: {EchartsCommon},
    props: {
        // loading2: {
        //     type: Boolean
        // }
    },
    data() {
        return {
            loading2: false,
            chartOptions2:  {
                title: {
                    text: '病历导入情况',
                    left:'80px'
                },
                color: ['#FFA200', '#0ACAE2', '#FF3E43', '#32FF00'],//圆点颜色
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:[
                        {
                            name:'手动录入',
                            itemHeight:9,//改变圆圈大小
                            icon: 'circle'//设置为圆点
                        },
                        {
                            name:'自动录入',
                            itemHeight:9,//改变圆圈大小
                            icon: 'circle'
                        },
                        {
                            name:'待审核',
                            itemHeight:9,//改变圆圈大小
                            icon: 'circle'
                        },
                        {
                            name:'审核通过',
                            itemHeight:9,//改变圆圈大小
                            icon: 'circle'
                        }
                    ]
                },
                xAxis: {
                    boundaryGap: false,
                    data: ["2018-11-1", "2018-11-2", "2018-11-3", "2018-11-4", "2018-11-5", "2018-11-6"]
                },
                yAxis: {},
                series: [{
                    name: '手动录入',
                    type: 'line',//线型
                    smooth:0.3,//波浪
                    symbol: 'none',//去掉折点形状
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                width:0//线条宽度设置为0
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFA54F'//线条填充颜色
                            }])
                        }
                    },
                    data: [100, 20, 37, 50, 87, 10]
                },{
                    name: '自动录入',
                    type: 'line',
                    smooth:0.3,
                    symbol: 'none',
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                width:0
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#40E0D0'
                            }])
                        }
                    },
                    data: [6, 46, 87, 34, 67, 23]
                },{
                    name: '待审核',
                    type: 'line',
                    smooth:0.3,
                    symbol: 'none',
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                width:0
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FF4040'
                            }])
                        }
                    },
                    data: [7, 97, 39, 12, 89, 24]
                },{
                    name: '审核通过',
                    type: 'line',
                    smooth:0.3,
                    symbol: 'none',
                    itemStyle : {
                        normal : {
                            lineStyle:{
                                width:0
                            }
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#7FFF00'
                            }])
                        }
                    },
                    data: [8, 56, 40, 100, 13, 45]
                }]
            }
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        butChildClick1() {
            this.barEchartsDete();
        },
        barEchartsDete() {
        }
    },
};
</script>

<style lang="less" module>
    .secene {
        background-color: #fff;
    }
</style>
