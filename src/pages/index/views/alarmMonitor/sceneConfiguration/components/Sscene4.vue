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
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['舒张压','收缩压']
                },
                calculable : true,

                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        axisLabel:{
                            rotate:45,
                            interval:0
                        },
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        name:'血压',
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}'
                        }
                    }
                ],
                visualMap: [
                    {
                        show: false,
                        seriesIndex:0,
                        pieces: [
                            {
                                gt:0,
                                lte:60,
                                color:'#e91642'
                            },
                            {
                                gt: 60,
                                lte: 90,
                                color: '#D5D5D5'
                            },
                            {
                                gt: 90,
                                let:200,
                                color: '#e91642'
                            }
                        ]
                    },
                    {
                        show: false,
                        seriesIndex:1,
                        pieces:[
                            {
                                gt:0,
                                lte:90,
                                color:'#e91642'
                            },
                            {
                                gt: 90,
                                lte: 140,
                                color: '#EBEBBE'
                            }, {
                                gt: 140,
                                let:200,
                                color: '#e91642'
                            }]
                    }
                ],
                series : [
                    {
                        name:'舒张压',
                        type:'line',
                        data:[55, 85, 90, 95, 70,105, 90],
                        // markPoint : {
                        //     data : [
                        //         {type : 'max', name: '最大值'},
                        //         {type : 'min', name: '最小值'}
                        //     ]
                        // },
                        markArea: {
                            // silent:false,
                            // itemStyle:{
                            //     color:'#BCE7B1'
                            // },
                            data: [
                                [{
                                    name: '',
                                    yAxis: 60
                                },
                                    {
                                        yAxis: 90
                                    }]
                            ],
                        },
                    },
                    {
                        name:'收缩压',
                        type:'line',
                        data:[90, 95, 105, 160, 135, 150, 140],
                        // markPoint : {
                        //     data : [
                        //         {type : 'max', name: '最大值'},
                        //         {type : 'min', name: '最小值'}
                        //     ]
                        // },
                        markArea: {
                            silent:false,
                            // itemStyle:{
                            //     color:'#B8C4F1'
                            // },
                            data: [
                                [
                                    {
                                        name: '11',
                                        yAxis: 10
                                    },
                                    {
                                        yAxis: 140
                                    }
                                ]
                            ],
                        },
                    }
                ]
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
