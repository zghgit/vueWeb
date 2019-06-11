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
        <sof-scene v-if="activeName === '0'"></sof-scene>
        <sof-scene2 v-if="activeName === '1'"></sof-scene2>
        <sof-scene3 v-if="activeName === '2'"></sof-scene3>
    </div>
</template>

<script>
import SofScene from '../sceneConfiguration/components/Sscene';
import SofScene2 from '../sceneConfiguration/components/Sscene2';
import SofScene3 from '../sceneConfiguration/components/Sscene3';
export default {
    name: 'Index',
    components: {SofScene, SofScene2, SofScene3},
    data() {
        return {
            activeName: '0',
            activePane: [
                {
                    name: '0',
                    label: 'echarts1'
                },
                {
                    name: '1',
                    label: 'echarts2'
                },
                {
                    name: '2',
                    label: 'echarts3'
                }
            ]
        };
    },
    methods: {
    },
    mounted() {}
};
</script>

<style lang="less" module></style>
