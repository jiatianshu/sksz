/*
 * @Author: gq
 * @Date: 2023-02-14 18:59:00
 * @LastEditors: gq
 * @LastEditTime: 2023-02-14 19:04:35
 * @Description: file content
 */
import Vue from 'vue'
import warningCenter from '@/components/warning/warningCenter.vue'

// 单例模式
let instance = null

function create (Component, props) {
    const vm = new Vue({
   /* render函数用来生成虚拟dom，接收一个createElement函数（一般称之h函数），
     并返回该函数的执行结果(生成的虚拟dom)。
      h函数接受三个参数，
      1.一个标签名或组件选项对象。
      2.与模板中属性对应的数据对象。
      3.子节点。
     生成的虚拟dom需要经过挂载($mount)才能变成真实dom
   */
    render: h => h(Component, { props })
    // 这里不指定宿主元素，因为直接指定body的话会将已有的内容替换掉。
    }).$mount() 
    /* 通过dom操作追加元素  $el可以获取真实dom */
    document.body.appendChild(vm.$el)
    /* 获取组件实例 */
    const comp = vm.$children[0]
    /* 添加销毁组件的方法 */
    comp.remove = function () {
      document.body.removeChild(vm.$el)
      vm.$destroy()
    }

    return comp
}

export default {
/* install方法实现的需求是 在使用组件时不需要再传入组件模板，只需传入参数，
   因此使用柯里化函数实现。*/
  install(Vue) {
    Vue.prototype.$fullLoginAd = (options)=> {
      if (!instance){
        instance = create(warningCenter, options)
      }
      return instance
    }
  }
}