<template>
    <div class="about">
        <h1>This is an about page</h1>
        <s-card :title="`账户明细`" :icon="`el-icon-edit`" :subTitle="`*请注意`">
            <div slot="right">
                <el-button size="mini" type="text">明细<i class="el-icon-plus"></i></el-button>
            </div>
            <div slot="content">
                <s-table :columns="columns" :tableData="tableData"></s-table>
            </div>
        </s-card>
    </div>
</template>
<script>
import SCard from '@/components/index/common/SCard';
import STable from '@/components/index/common/STable';
export default {
    components: {
        SCard,
        STable
    },
    data() {
        return {
            columns: [
                {field: 1, label: 'test1'},
                {field: 11, label: 'test2'},
                {field: 121, label: 'test3'},
            ],
            tableData: [
                {test1: 1, test2: 2, test3: 3},
                {test1: 4, test2: 5, test3: 6},
                {test1: 7, test2: 8, test3: 9},
                {test1: 10, test2: 11, test3: 12},
            ]
        };
    }
};
</script>
