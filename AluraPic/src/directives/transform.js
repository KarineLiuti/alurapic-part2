import Vue from 'vue';

Vue.directive('my-transform', {
  bind(el, binding, vnode) {
    let current = 0;
    
    el.addEventListener('dblclick', function () {
      let animate = false;

      if (binding.value) {
        current += binding.value.increment;
        animate = binding.value.animate;
      }

      el.style.transform = `rotate(${current}deg)`;
      if (animate) el.style.transition = '0.5s ease-in-out';
    })
  }
})