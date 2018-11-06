import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource); //klient http dla vue
//Custom directives
Vue.directive('rainbow',{ //do tworzenie elementu uzywamy nazwy dyrektywy bez wymuszonego przedroska v-
  //maja tez petle zycia
  bind(el, binding, vnode){
    //funkcja
    el.style.color = "#" + Math.random().toString().slice(2,8);

  }
});

//koljna dyrektywa
Vue.directive('theme',{
  bind(el, binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }
    else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
