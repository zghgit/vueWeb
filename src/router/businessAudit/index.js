import Home from '@/pages/index/views/Home.vue';
import BusinessAudit from '@/router/businessAudit/Index.vue';

const BusinessAuditIndex = {
    path: '',
    name: 'tools3',
    label: 'VUE',
    component: Home,
    icon: 'menu-fix-icon fa fa-toolbox',
    children: [
        {
            path: '',
            name: 'businessAudit',
            label: 'VUE-修饰符',
            icon: 'menu-fix-icon fa fa-address-book',
            component: BusinessAudit,
            children: [
                {
                    meta: 'scrollTop',
                    path: '/',
                    hidden: true,
                    name: 'typeSpecifier',
                    label: '事件-修饰符',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/businessAudit/typeSpecifier/Index.vue'], resolve)
                },
                {
                    meta: 'scrollTop',
                    path: '/typeSpecifier',
                    name: 'typeSpecifier',
                    label: 'VUE-事件-修饰符',
                    icon: 'menu-fix-icon fa fa-location-arrow',
                    component: resolve => require(['@/pages/index/views/businessAudit/typeSpecifier/Index.vue'], resolve)
                },
            ]
        }
    ]
};
export default BusinessAuditIndex;
