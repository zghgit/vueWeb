// 第一步: src/config/dev.js   配置 -- api: 'http://localhost:8080'
// 第二步：src/helper/axios.js 判断--  baseURL: url || config.server.api,（当前url地址，不是就替换配置的URL地址）
// **第三步**：src/mock/index.js   这里是请求的模拟数据（模拟后端数据，&&一般不用这里&&，没有真实接口调动的效果）
// 第四步：src/api/alarmMonitor/index.js   这里是当前模块的接口路径（模拟真实接口联调）
// 第五步：src/pages/index/views/alarmMonitor/sceneConfig/Index.vue  本模块需要联调的接口数据

import instance from '@/helper/axios';

const axios = instance('http://localhost:8086');

const base = '/mock';

const list = params => axios.get(`${base}/list`, {params}).then(res => res.data);
const test = params => axios.get(`${base}/test`, {params}).then(res => res.data);

export default {
    list,
    test
};
