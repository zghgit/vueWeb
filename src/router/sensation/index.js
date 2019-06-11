import Home from '@/pages/index/views/Home.vue';
import AlarmMonitor from '@/router/alarmMonitor/Index.vue';

const Index = {
    path: '',
    name: 'tools11',
    label: '监管科技工具集',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'alarmMonitor',
            label: '关联账户分析',
            icon: 'menu-fix-icon fa fa-address-book',
            component: AlarmMonitor,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'sceneConfig',
                    label: '分析向导',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfig/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/sceneConfig',
                    name: 'sceneConfig',
                    label: '分析向导',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfig/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: 'sceneConfiguration',
                    name: 'sceneConfiguration',
                    label: '关联账户组合并',
                    icon: 'menu-fix-icon fa fa-venus-double',
                    component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfiguration/Index.vue'], resolve)
                }
            ]
        }
    ]
};
export default Index;
