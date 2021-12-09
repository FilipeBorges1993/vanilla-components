<template>
  <div
    v-if="show"
    class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
  >
    <ExclamationCircleIcon class="w-5 h-5 text-red-500" />
  </div>
</template>

<script>
import {ExclamationCircleIcon} from "@heroicons/vue/solid";
export default {
  name: "VanillaFormErrorIcon",
  components: {
    ExclamationCircleIcon
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
