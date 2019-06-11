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
            chartOptions2: {
                backgroundColor: '#fff',//背景色
                grid: {
                    left: 35,
                    right: 20,
                    top: 10,
                    bottom:40,
                    show:false
                },
                tooltip: {
                    // trigger: 'axis',
                    formatter: function (param) {
                        return  param.value[0] + "<br>" + param.value[1] + "°C";
                    }
                },
                xAxis: {
                    type:"time",
                    splitNumber: 10,
                    axisLabel: {
                        // rotate: 60,
                        textStyle: {
                            fontSize: 8
                        }
                    }
                },
                yAxis: {
                    min: 35
                },
                visualMap: {
                    top: 10,
                    right: 10,
                    pieces: [{
                        gte: 0,
                        lte: 37,
                        color: '#4D74FA'
                    },{
                        gt: 37,
                        lte: 40,
                        color: '#FA578B'
                    }],
                    outOfRange: {
                        color: '#FA578B'
                    }
                    // show : false
                },
                series: [{
                    data: [
                        {name:'"2018-07-05 18:00:29"', value:["2018-07-05 18:00:29", 37]},
                        {name:'2018-07-04 18:00:29', value:["2018-07-04 18:00:29", 36]},
                        {name:'2018-07-03 18:00:29', value:["2018-07-03 18:00:29", 36.5]},
                        {name:'2018-07-03 12:00:29', value:["2018-07-03 12:00:29", 36]},
                        {name:'2018-07-02 18:00:29', value:["2018-07-02 18:00:29", 37.5]},
                        {name:'2018-07-01 18:00:29', value:["2018-07-01 18:00:29", 38]}
                    ],
                    markLine: {
                        silent: true,
                        data: [{
                            yAxis: 37
                        }]
                    },
                    type: 'line',
                    smooth: true,
                    markArea:{
                        data: [
                            [
                                {yAxis: 37},
                                {}
                            ]
                        ],
                        itemStyle:{
                            opacity: 0.5,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#fff' // 0% 处的颜色
                                },
                                    {
                                        offset: 1, color: '#E7AEAD' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    }
                    // areaStyle: {
                    //     normal: {
                    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //             offset: 0,
                    //             color: 'rgb(255, 158, 68)'
                    //         }, {
                    //             offset: 1,
                    //             color: '#fff'
                    //         }])
                    //     }
                    // },
                },
                    {
                        name:'.anchor',
                        type:'line',
                        showSymbol:false,
                        data: [
                            {name:'2018-07-01', value:['2018-07-01', 0]},
                            {name:'2018-07-08', value:['2018-07-08', 0]}
                        ],
                        itemStyle:{normal:{opacity:0}}, //不绘制该线条
                        lineStyle:{normal:{opacity:0}}
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
            if (this.chartOptions2 && typeof this.chartOptions2 === 'object') {
                var startTime = +new Date();
                this.chartOptions2.series[0].data = [14, 8, 126, 32, 164, '-', '-'];
                this.chartOptions2.series[1].data = ['-', '-', '-', '-', 154, 68, 256];
            }
            // setInterval(() => {
            //     let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, ''); // 分钟
            //     let data0 = Math.round(Math.random() * 1000); // 分钟
            //     let data1 = (Math.random() * 10 + 5).toFixed(1) - 0; // 分钟
            //     this.chartOptions2['xAxis']['data'].push(axisData);
            //     this.chartOptions2['series'][0]['data'].push(data0);
            //     this.chartOptions2['series'][1]['data'].push(data1);
            // }, 2000);
        }
    },
};
</script>

<style lang="less" module>
    .secene {
        background-color: #fff;
    }
</style>
