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
                    },
                    {
                        name:'血压1',
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}%'
                        }
                    }
                ],
                // visualMap: [
                //     {
                //         show: false,
                //         seriesIndex:0,
                //         pieces: [
                //             {
                //                 gt:0,
                //                 lte:60,
                //                 color:'#e91642'
                //             },
                //             {
                //                 gt: 60,
                //                 lte: 90,
                //                 color: '#D5D5D5'
                //             },
                //             {
                //                 gt: 90,
                //                 let:200,
                //                 color: '#e91642'
                //             }
                //         ]
                //     },
                //     {
                //         show: false,
                //         seriesIndex:1,
                //         pieces:[
                //             {
                //                 gt:0,
                //                 lte:90,
                //                 color:'#e91642'
                //             },
                //             {
                //                 gt: 90,
                //                 lte: 140,
                //                 color: '#EBEBBE'
                //             }, {
                //                 gt: 140,
                //                 let:200,
                //                 color: '#e91642'
                //             }]
                //     }
                // ],
                series : [
                    {
                        name:'舒张压',
                        type:'line',
                        data:[55, 85, 60, 95, 70,105, 90],
                        // markPoint : {
                        //     data : [
                        //         {type : 'max', name: '最大值'},
                        //         {type : 'min', name: '最小值'}
                        //     ]
                        // },
                        markArea: {
                            silent:false,
                            itemStyle: {
                                color: '#BCE7B1'
                            },
                            data: [
                                [
                                    {
                                        name: '',
                                        xAxis: '周二',
                                        yAxis: 60
                                    },
                                    {
                                        xAxis: '周四',
                                        yAxis: 90
                                    }
                                ]
                            ],
                        },
                    },
                    {
                        name: '收缩压',
                        type: 'line',
                        data:[90, 95, 15, 160, 135, 150, 140],
                        // markPoint : {
                        //     data : [
                        //         {type : 'max', name: '最大值'},
                        //         {type : 'min', name: '最小值'}
                        //     ]
                        // },
                        markArea: {
                            silent:false,
                            itemStyle:{
                                color: 'red'
                            }
                        //     data: [
                        //         [
                        //             {
                        //                 name: '',
                        //                 xAxis: '周二',
                        //                 yAxis: 90,
                        //             },
                        //             {
                        //                 xAxis: '周四',
                        //                 yAxis: 140
                        //             }
                        //         ]
                        //     ],
                        },
                        symbol: 'circle',
                        // // 设置折点大小
                        symbolSize: 0,
                        // // 设置为光滑曲线
                        smooth: true
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
        }
    },
};
</script>

<style lang="less" module>
    .secene {
        background-color: #fff;
    }
</style>
