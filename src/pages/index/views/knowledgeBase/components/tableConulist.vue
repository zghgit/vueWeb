<template>
    <div :class="$style.tables">
        <le-table
            border
            ref="selfTable"
            :data="newData"
            :height="height"
            :v-loading="loading"
            style="width:100%; overflow:visible;">
                <el-table-column
                    v-if="showSelectionColumn"
                    type="selection"
                    align="center"
                    width="55"></el-table-column>
            </le-table>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style lang="less" module>
</style>