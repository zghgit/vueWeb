<template>
    <div :class="$style.input_table" style="display: flex; align-items: center;">
        <el-input v-model="scope.row[item.field]" size="mini"></el-input>
    </div>
</template>

<script>
export default {
    name: 'InputTable',
    components: {},
    data() {
        return {
        };
    },
    methods: {},
    mounted() {
    }
};
</script>

<style lang="less" module>

</style>
