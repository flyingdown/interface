// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuex from 'vuex'
import store from '@/vuex/store'
import {
    Row,
    Col,
    Input,
    Button,
    Form,
    FormItem,
    Checkbox,
    Message,
} from 'element-ui'

Vue.use(Vuex)

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Checkbox.name, Checkbox)

Vue.prototype.$message = Message

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
