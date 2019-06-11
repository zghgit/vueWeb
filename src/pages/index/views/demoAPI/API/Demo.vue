<template>
    <div>
        <el-tabs v-model="activeName" size="small" type="card">
            <el-tab-pane
                v-for="active in activePane"
                :label="active.label"
                :key="active.name"
                :name="active.name"
            ></el-tab-pane>
        </el-tabs>
        <api1 v-if="activeName === '1'"></api1>
        <api2 v-if="activeName === '2'"></api2>
    </div>
</template>

<script>
import Api1 from './components/api1';
import Api2 from './components/api2';
export default {
    name: 'Demo',
    components: {Api1, Api2},
    data() {
        return {
            activeName: '1',
            activePane: [
                {
                    name: '1',
                    label: '常用的框架API'
                },
                {
                    name: '2',
                    label: '开发遇到的问题解决办法链接'
                },
                {
                    name: '3',
                    label: '备用'
                }
            ]
        };
    },
    computed: {},
    mounted() {
    },
    methods: {},
};
</script>

<style lang="less" module>

</style>
