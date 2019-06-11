<template>
    <div :class="$style.demo">
        <h2>这里是兄弟之间传值</h2>
        <h4>ref</h4>
        <h4>vuex的使用是一个属性很多地方使用才会采取使用，不可乱用</h4>
        <brother></brother>
    </div>
</template>

<script>
import brother from './components/brother1';
export default {
    name: 'Index',
    components: {brother},
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
