<template>
    <!-- 第一步: src/config/dev.js   配置 &#45;&#45; api: 'http://localhost:8080'-->
    <!-- 第二步：src/helper/axios.js 判断&#45;&#45;  baseURL: url || config.server.api,（当前url地址，不是就替换配置的URL地址）-->
    <!-- 第三步：src/mock/index.js   这里是请求的模拟数据（模拟后端数据，一般不用这里，没有真实接口调动的效果）-->
    <!-- 第四步：src/api/alarmMonitor/index.js   这里是当前模块的接口路径（模拟真实接口联调）-->
    <!-- **第五步**：src/pages/index/views/alarmMonitor/sceneConfig/Index.vue  本模块需要联调的接口数据 -->
    <div :class="$style.port_data">
        <el-button type="primary" @click="btClick">服务器接口</el-button>
        <el-button type="primary" @click="btClick2">服务器接口</el-button>
        <el-button type="primary" @click="btClick1">本地数据</el-button>
    </div>
</template>

<script>
import getAlarmMonitor from '@/api/alarmMonitor/index';
import postBusinessAudit from '@/api/businessAudit/index';
// import app from '@/mock/index'; // 本地服务有错,暂时不能用
import app from '@/mock/index';
export default {
    name: 'Index',
    components: {},
    data() {
        return {
            exportsData: [],
            pageZum: 1,
            pageSize: 10,
            tableData: [],
            columnsList: [],
            loadingFlag: false
        };
    },
    computed: {
        listParams() {
            let params = {
                pageSize: this.pageSize,
                pageZum: this.pageZum

            };
            return params;
        }
    },
    mounted() {
    },
    methods: {
        async btClick() {
            const response = await getAlarmMonitor.apiData(this.listParams);
            if (response.code === 200) {
                console.log(response.data);
            }
        },
        async btClick2() {
            const response = await postBusinessAudit.apiData(this.listParams);
            if (response.code === 200) {
                console.log(response.data);
            }
        },
        async btClick1() {
            const response1 = await app.list(this.listParams);
            // console.log(response1);
            // if (response1.code === 200) {
            console.log(response1.list);
            // }
        }
    }
};
</script>

<style lang="less" module>
</style>
