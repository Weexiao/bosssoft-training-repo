import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import myconfirm from '@/utils/myconfirm'
// 导入清空表单工具
import resetForm from '@/utils/resetForm'
// 导入快速复制对象工具
import objCopy from '@/utils/objCopy'
// 导入按钮权限判断
import hasPermission from '@/permission/index'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// 导入封装信息确认提示框组件脚本
Vue.prototype.$myconfirm = myconfirm
Vue.prototype.$resetForm = resetForm
Vue.prototype.$objCopy = objCopy
Vue.prototype.hasPermission = hasPermission

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
