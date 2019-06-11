<template>
    <div :class="$style.demo">
        <brother2  ></brother2>
    </div>
</template>

<script>
import Brother2 from '../components/brother2';
export default {
    name: 'brother1',
    components: {Brother2},
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
