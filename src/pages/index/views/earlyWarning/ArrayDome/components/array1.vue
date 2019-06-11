<template>
    <div>
        <el-button @click="arrayClick">数组解构</el-button>
        <p>
            声明一个对象 <br/>
            let red = { <br/>
            dim: ['a', 'b', 'c'], <br/>
            tar: [1, 3, 5] <br/>
            }; <br/>
            *第一中解构赋值(简洁的解构)* <br/>
            let {dim, tar} = red; <br/>
            第二种解构赋值 <br/>
            let {dim: ff1, tar: ff2} = red; <br/>
            console.log(ff1， ff2); <br/>
        </p>
        <p>
            let a = 1; <br/>
            var b = 2; <br/>
            var c = 3; <br/>
            let [a, b, c] = [1, 2, 3] <br/>
            console.log([a, b, c] = [1, 2, 3]); <br/>
        </p>
        <p>
            函数解构<br/>
            let node = {<br/>
            type: 'Identifier',<br/>
            name: 'angela'<br/>
            },<br/>
            type = '',<br/>
            name = 1;<br/>
            function outputInfo(value) {<br/>
            console.log(value === node);<br/>
            }<br/>
            outputInfo({type, name} = node);<br/>
        </p>
        <p>
            let node = {<br/>
            type: 'Identifier',<br/>
            name: 'angela'<br/>
            };<br/>
            function outputInfo(value) {<br/>
            console.log(value === node);<br/>
            }<br/>
            outputInfo(node);<br/>
        </p>
        <p>
            let node = {
            type: 'Identifier',
            name: 'angela'
            };
            function outputInfo({type, name}) {
            console.log(type, name);
            }
            传入一个对象
            outputInfo(node);
        </p>
        <p>
            let node = {
            type: 'Identifier',
            name: 'angela'
            };
            function outputInfo(val) {
            console.log(val);
            console.log(val === node);
            }
            outputInfo(node);
        </p>
    </div>
</template>

<script>
export default {
    name: 'array1',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {
        arrayClick() {
            // let node = {
            //         type: 'Identifier',
            //         name: 'angela'
            //     };
            // function outputInfo(value) {
            //     console.log(value === node);
            // }
            // outputInfo(node);
            //
            //
            let node = {
                type: 'Identifier',
                name: 'angela'
            };
            function outputInfo({type, name}) {
                console.log(type, name);
            }
            outputInfo(node);
            //
            //
            // let colors = ['red', 'green', 'blue'];
            // let [, , thirdColor] = colors;
            // console.log(thirdColor);
            // let red = {
            //     dim: ['a', 'b', 'c'],
            //     tar: [1, 3, 5]
            // };
            // let {dim, tar} = red;
            // console.log(dim, tar);
            //
            // let {dim: ff1, tar: ff2} = red;
            // console.log(ff1, ff2);
        }
    },
};
</script>

<style lang="less" module>

</style>
