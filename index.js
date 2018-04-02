import toastComponent from './toast.vue'

const Toast = {}

let $vm

Toast.install = function (Vue, options) {
  // 不重复install
  if (Toast.installed) return
  Toast.installed = true

  // 挂在$toast方法到Vue原型上
  Vue.prototype.$toast = function (message, duration, callback, config) {
    let Ext = Vue.extend(toastComponent)

    if (!$vm) {
      $vm = new Ext({
        el: document.createElement('div')
      })
    }

    $vm.message = message || 'message'
    $vm.duration = duration || 2500

    $vm.show = true

    document.body.appendChild($vm.$el)

    setTimeout(() => {
      $vm.show = false
      typeof callback === 'function' && callback()
    }, $vm.duration)
  }
}

export default Toast
