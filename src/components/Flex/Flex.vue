<template>
  <component :is="baseTag" :class="className">
    <slot />
  </component>
</template>

<script>
import styledMixin from "../../styledComponent/styledMixin";

export default {
  props: {
    flex: {
      type: [String, Boolean],
      default: true,
    },
  },
  mixins: [styledMixin],
};
</script>

<style>
</style>