<template>
  <vanilla-input-layout :layout="layout">
    <template #label>
      <slot
        v-if="$slots.label || label"
        name="label"
      >
        <vanilla-form-label
          :label-for="name"
          :value="label"
          @click="focusInput"
        />
      </slot>
    </template>

    <div class="relative flex">
      <slot name="before" />
      <input
        :id="name"
        ref="input"
        v-model="internalValue"
        :name="name"
        type="text"
        :autocomplete="name"
        :class="[
          hasErrors ? 'danger' : '',
          classesForButtonHasGroupAbove,
          classesForButtonHasGroupBellow
        ]"
        class="form-input"
        v-bind="$attrs"
      >
      <slot name="after" />
      <vanilla-form-error-icon :show="hasErrors && showLeadingErrorIcon" />
    </div>
    <vanilla-form-errors
      v-if="hasErrors && showErrors"
      :error="errors"
    />
    <vanilla-form-helper
      v-if="help"
      :text="help"
    />
  </vanilla-input-layout>
</template>

<script setup>
import VanillaInputLayout from "@/components/Inputs/Partials/Layout.vue";
import VanillaFormErrors from "@/components/Inputs/Partials/Errors.vue";
import VanillaFormErrorIcon from "@/components/Inputs/Partials/ErrorIcon.vue";
import VanillaFormHelper from "@/components/Inputs/Partials/Helper.vue";
import VanillaFormLabel from "@/components/Inputs/Partials/Label.vue";
import { useGroupedPropValidator, useLayoutPropValidator } from "@/utils/usePropValidator";
import { useSyncProp } from "@/utils/SyncProps";

const props = defineProps({
    label: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    nameSeed: {
      type: String,
      default: '',
      required: false,
    },
    help: {
      type: String,
      default: ''
    },
    errors: {
      type: [Array, String],
      default: '',
      sync: 'internalErrors',
    },
    showErrors: {
      type: Boolean,
      default: true,
    },
    showLeadingErrorIcon: {
      type: Boolean,
      default: true,
    },
    layout: {
      type: [String],
      default: 'default',
      required: false,
      validate: useLayoutPropValidator,
    },
    grouped: {
      type: [String],
      default: null,
      required: false,
      validate: useGroupedPropValidator,
    }
  }
)

const internalErrors = ref([]);

useSyncProp(props.errors, internalErrors, 'update:errors')

const input = ref(null)
const focusInput = () => input.value.focus()

</script>
