<template>
    <div :class="$style.a_input_link_lable">
        <a @click="handleClick">{{scope.row.a1}}</a>
    </div>
</template>

<script>
export default {
    name: 'ALinkTable',
    components: {},
    props: {
        scope: {
            type: Object,
            default() {
                return {};
            }
        },
        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
        };
    },
    methods: {
        handleClick() {
            window.open(`#/333？cusid=${this.scope.row.a1}`);
        }
    },
    mounted() {
    }
};
</script>

<style lang="less" module>

</style>
