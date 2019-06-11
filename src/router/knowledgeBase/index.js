import Home from '@/pages/index/views/Home.vue';
import KnowledgeBase from '@/router/knowledgeBase/Index.vue';

const Index = {
    path: '',
    name: 'tools7',
    label: '监管科技工具集',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'knowledgeBase',
            label: '组件开发',
            icon: 'menu-fix-icon fa fa-address-book',
            component: KnowledgeBase,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'test1',
                    label: 'tab组件',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/knowledgeBase/test1/index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/test1',
                    name: 'test1',
                    label: 'tab组件',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/knowledgeBase/test1/index.vue'], resolve)
                },
                // {
                //     meta: 'scrollTop',
                //     path: 'sceneConfiguration',
                //     name: 'sceneConfiguration',
                //     label: '关联账户组合并',
                //     icon: 'menu-fix-icon fa fa-venus-double',
                //     component: resolve => require(['@/pages/index/views/alarmMonitor/sceneConfiguration/Index.vue'], resolve)
                // }
            ]
        }
    ]
};
export default Index;
