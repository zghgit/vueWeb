<template>
    <div :class="$style.demo">
        <h2>子传父</h2>
        <div v-if="realShow">435342</div>
        <div @click="isClick">这里是子组件传递的值</div>
    </div>
</template>

<script>
export default {
    name: 'parent1',
    components: {},
    props: {
        realShow: {
            type: Boolean
        }
    },
    mixins: [],
    watch: {},
    data() {
        return {
            activeName: '0',
            activePane: []
        };
    },
    methods: {
        isClick() {
            this.$emit('evetClick', '这是子传父');
        }
    },
    mounted() {
    },
    beforeDestroy() {}
};
</script>

<style lang="less" module>

</style>
