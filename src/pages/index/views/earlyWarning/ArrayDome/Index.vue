<template>
    <div :class="$style.arry1">
        <el-card>
            <el-tabs v-model="activeName" size="small" type="card">
                <el-tab-pane
                    v-for="active in activePane"
                    :label="active.label"
                    :key="active.name"
                    :name="active.name"
                >
                </el-tab-pane>
            </el-tabs>
            <array1 v-if="activeName === '1'"></array1>
            <array2 v-if="activeName === '2'"></array2>
            <array3 v-if="activeName === '3'"></array3>
            <array4 v-if="activeName === '4'"></array4>
            <array5 v-if="activeName === '5'"></array5>
        </el-card>
    </div>
</template>

<script>
import Array1 from './components/array1';
import Array2 from './components/array2';
import Array3 from './components/array3';
import Array4 from './components/array4';
import Array5 from './components/array5';
export default {
    name: 'Index',
    components: {Array1, Array2, Array3, Array4, Array5},
    data() {
        return {
            activeName: '1',
            activePane: [
                {
                    label: '数组解构',
                    name: '1'
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
