export default {
  beforeMount(el, binding) {
    const clickOutsideEvent = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event);
      }
    };

    el.__vueClickEventHandler__ = clickOutsideEvent;
    document.addEventListener('click', clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__vueClickEventHandler__);
  },
};
