import Vue from 'vue';
import Router from 'vue-router';
import {Notification} from 'element-ui';
import DemoAPIIndex from './demoAPI/index';
import AlarmMonitorIndex from './alarmMonitor/index';
import AnalysisToolIndex from './analysisTool/index';
import BusinessAuditIndex from './businessAudit/index';
import EarlyWarning from './earlyWarning/index';
import HomePage from './homePage/index';
import KnowledgeBase from './knowledgeBase/index';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        const position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => !m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};
/**  菜单目录
 * 1、alarmMonitor      组件
 * 2、analysisTool      分析工具
 * 3、businessAudit     操作日志审计
 * 4、earlyWarning      预警管理
 * 5、homePage          首页
 * 6、knowledgeBase     知识库
 * 7、marketStability   舆情监测
 * 8、marketSupervise   市场运行监测
 * 9、publicSupervise   业务审计
 * 10、sensation        工作统计
 * 11、superviseTask    监察任务
 * 12、systemManage     系统管理
 * 13、workStatistics   系统管理-模块管理
 **/

// todo 按模块写入单独的文件引用
const router = new Router({
    scrollBehavior,
    routes: [
        {
            path: '/homeName',
            name: 'homeName',
            label: '项目目录说明',
            icon: 'menu-fix-icon fa fa-venus-double',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/pages/index/views/homePage/demo/demo.vue')
        },
        AlarmMonitorIndex, // 组件
        DemoAPIIndex, // WEB-API链接
        AnalysisToolIndex, // 前端开发框架工具
        BusinessAuditIndex, // VUE
        EarlyWarning, // ES6
        HomePage,
        KnowledgeBase,
        {
            path: '/about',
            name: 'about',
            label: '介绍',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/pages/index/views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            label: '登录',
            // route level code-splitting
            // this generates a separate chunk (login.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "login" */ '@/pages/index/views/Login.vue')
        }
    ]
});

// todo
router.beforeEach((to, from, next) => {
    // todo权限校验等
    next();
});

router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
        next();
    } else {
        document.title = to.meta.title || '上期所大数据监管科技平台';
        // 权限校验等
        let accessToken = localStorage.getItem('ACCESS_TOKEN');
        if (!accessToken) {
            Notification.error('您的登陆已过期，请重新登录!');
            localStorage.removeItem('ACCESS_TOKEN');
            localStorage.removeItem('USER_NAME');
            next({
                path: '/login',
                query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        } else {
            next();
        }
    }
});
router.afterEach((to, from, next) => {
    Vue.prototype.$jquery('#main-container').scrollTop(0);
});
export default router;
