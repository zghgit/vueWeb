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
                    text: '堆叠区域图'
                },
                tooltip : {
                    trigger: 'axis',
                    // formatter: '{b} <br> {a0}: {c0}<br />{a1}: {c1}'

                    //内容格式化
                    formatter:function(params,ticket,callback)
                    {
                        //处理提示框显示的信息
                        console.log(params);
                        var res=params[0].name+'<br/>';
                        for(var i=0;i<params.length;i++)
                        {
                            if(i ===0){
                                res+=params[i].seriesName+':'+params[i].value;
                            }
                            if(i === 1){
                                if(params[i].value == null || params[i].value == undefined){
                                    res+=params[i].seriesName+': -';
                                }else{
                                    res+=params[i].seriesName+':'+ String(parseInt(params[i].value)+parseInt(params[0].value));
                                }

                            }
                            if(i === 2){
                                if(params[i].value == null || params[i].value == undefined){
                                    res+=params[i].seriesName+': -';
                                }else{
                                    res+=params[i].seriesName+':'+ String(parseInt(params[i].value)+parseInt(params[0].value));
                                }
                            }
                            res+='<br>';
                        }
                        //模拟异步回调
                        setTimeout(function()
                        {
                            callback(ticket,res);

                        },50)
                        return "loading";
                    }

                },
                legend: {
                    data:['邮件营销','联盟广告','视频广告']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',

                        data:[200, 302, 100, 340, 290, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[null, 32, 51, null, 20, 30, null]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[null, null, null, null, null, 30, 10]
                    },
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
