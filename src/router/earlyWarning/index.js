import Home from '@/pages/index/views/Home.vue';
import EarlyWarning from '@/router/earlyWarning/Index.vue';

const Index = {
    path: '',
    name: 'tools5',
    label: 'ES6',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'earlyWarning',
            label: 'ES6 解构',
            icon: 'menu-fix-icon fa fa-address-book',
            component: EarlyWarning,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'arrayDome',
                    label: 'Array 解构',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/earlyWarning/ArrayDome/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/arrayDome',
                    name: 'arrayDome',
                    label: 'Array 解构',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/earlyWarning/ArrayDome/Index.vue'], resolve)
                }
            ]
        }
    ]
};
export default Index;
