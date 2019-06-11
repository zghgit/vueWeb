// import Vue from 'vue';
import Home from '@/pages/index/views/Home.vue';
import HomePage from '@/router/homePage/Index.vue';

const Index = {
    path: '',
    name: 'tools6',
    label: 'vue组件',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'homePage',
            label: '父子、兄弟组件',
            icon: 'menu-fix-icon fa fa-address-book',
            component: HomePage,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'parentSubassembly',
                    label: '父子组件',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/homePage/parentSubassembly/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/parentSubassembly',
                    name: 'parentSubassembly',
                    label: '父组件',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/homePage/parentSubassembly/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: 'brotherSubassembly',
                    name: 'brotherSubassembly',
                    label: '兄弟组件',
                    icon: 'menu-fix-icon fa fa-venus-double',
                    component: resolve => require(['@/pages/index/views/homePage/brotherSubassembly/Index.vue'], resolve)
                }
            ]
        }
    ]
};
export default Index;
