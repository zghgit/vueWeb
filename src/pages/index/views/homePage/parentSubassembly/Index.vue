<template>
    <div :class="$style.demo">
        <h2>这里是父子之间传值</h2>
        <h4>父传值使用: props 属性</h4>
        <h4>子传父使用： this.$emit('EClick', paren)方法</h4>
        <Parent1 :realShow="realShowIs" @evetClick="evetClickIs"></Parent1>
    </div>
</template>

<script>
import Parent1 from './components/parent1';
export default {
    name: 'Index',
    components: {Parent1},
    data() {
        return {
            realShowIs: true
        };
    },
    watch: {
        // evetClickIs: {
        //     handler(v) {
        //         console.log(v);
        //     }
        // }
    },
    methods: {
        evetClickIs(v) {
            console.log(v);
        }
    },
    mounted() {
        this.evetClickIs();
    }
};
</script>

<style lang="less" module>

</style>
