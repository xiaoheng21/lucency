<template>
  <component :is="baseTag" :class="className">
    <slot />
  </component>
</template>

<script>
import styledMixin from "../../styledSystem/styledMixin";

export default {
  mixins: [styledMixin],
};
</script>

<style>
</style>