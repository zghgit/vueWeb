// 预警监控路由
// import Vue from 'vue';
import Home from '@/pages/index/views/Home.vue';
// 下面两个路径任选一个，怎么好理解，就怎么引入文件路径
// import AlarmMonitor from '@/pages/index/views/alarmMonitor/Index.vue';
import AlarmMonitor from '@/router/alarmMonitor/Index.vue';

// 一个空模板，方便子节点使用
// const Root = Vue.component('root', {
//     template: '<router-view></router-view>'
// });

const AlarmMonitorIndex = {
    path: '',
    name: 'tools1',
    label: '组件',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'alarmMonitor',
            label: '模块组件',
            icon: 'menu-fix-icon fa fa-address-book',
            component: AlarmMonitor,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'sceneConfig',
                    label: '标题组件',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfig/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/sceneConfig',
                    name: 'sceneConfig',
                    label: '标题组件',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfig/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/portData',
                    name: 'portData',
                    label: '接口调用',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/portData/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: 'sceneConfiguration',
                    name: 'sceneConfiguration',
                    label: 'echarts-折线图',
                    icon: 'menu-fix-icon fa fa-venus-double',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfiguration/Index.vue'], resolve)
                }
            ]
        }
    ]
};
export default AlarmMonitorIndex;
