<template>
    <div :class="$style.scene_config">
        <s-card :title="`异常交易`" :icon="`fa fa-chart-line`">
            <s-table
                slot="content"
                ref="sceneRef"
                :height="450"
                :loading="loadingFale"
                :columns="columnsList"
                :tableData="tabledatas"
                @selection-change="selectionChange">
            </s-table>
        </s-card>
    </div>
</template>

<script>
import SCard from '@/components/index/common/SCard';
import STable from '@/components/index/common/STable';
import {columsList} from './components/constants';
export default {
    name: 'Index',
    components: {SCard, STable},
    data() {
        return {
            loadingFale: false,
            columnsList: columsList,
            tabledatas: [],
        };
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        selectionChange() {}
    }
};
</script>

<style lang="less" module>
    .scene_config {
        font-size: 14px;
    }
</style>
