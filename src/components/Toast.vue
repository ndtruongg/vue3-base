<template>
  <Transition name="fadeUp">
    <div
      v-if="visible"
      class="fixed left-1/2 top-4 z-[1000] flex -translate-x-1/2 transform items-start justify-between gap-4 rounded-xl border border-slate-500 bg-black px-3 py-2 text-white transition ease-in-out"
    >
      <p class="text-sm">
        {{ message }}
      </p>
      <button @click="close" class="">
        <IconClose width="20" height="20" />
      </button>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
const props = defineProps<{
  message: string
  onClose: () => void
}>()

const visible = ref(true)

const close = () => {
  visible.value = false
  setTimeout(() => {
    props.onClose()
  }, 300)
}
</script>

<style scoped>
.fadeUp-enter-active,
.fadeUp-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fadeUp-enter-from,
.fadeUp-leave-to {
  opacity: 0;
  transform: translateY(-10px) translateX(-50%);
}
.fadeUp-enter-to,
.fadeUp-leave-from {
  opacity: 1;
  transform: translateY(0) translateX(-50%);
}
</style>
