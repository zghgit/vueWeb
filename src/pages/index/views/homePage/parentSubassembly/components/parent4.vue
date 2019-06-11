<template>
    <div :class="$style.demo">
        <h2>子传父</h2>
    </div>
</template>

<script>
export default {
    name: 'parent1',
    components: {},
    computed: {},
    data() {
        return {
            activeName: '0',
            activePane: []
        };
    },
    methods: {},
    mounted() {
    }
}
</script>

<style lang="less" module>

</style>
