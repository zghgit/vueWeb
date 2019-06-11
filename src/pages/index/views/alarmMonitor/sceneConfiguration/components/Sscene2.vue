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
                title: {
                    text: 'echarts3的折线图分段显示不同的颜色',
                    left: 'center',
                    link: 'http://phping.sinaapp.com'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}'
                },
                legend: {
                    left: 'left',
                    data: ['指数']
                },
                xAxis: {
                    type: 'category',
                    name: 'x',
                    splitLine: {show: false},
                    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'log',
                    name: 'y'
                },
                series: [
                    {
                        name: '指数',
                        type: 'line',
                        data: [],
                        itemStyle: {
                            normal: {
                                color: '#222',
                                lineStyle: {
                                    color: '#f8f400'
                                }
                            }
                        },
                        markArea: {
                            data: [
                                [
                                    {
                                        yAxis: '9'
                                    },
                                    {
                                        yAxis: '10'
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        name: '指数',
                        type: 'line',
                        data: [],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#ff0000'
                                }
                            }
                        },
                        markArea: {
                            data: [
                                [
                                    {
                                        yAxis: '12'
                                    },
                                    {
                                        yAxis: '13'
                                    }
                                ]
                            ]
                        }
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
