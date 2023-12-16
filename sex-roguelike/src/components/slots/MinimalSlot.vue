<script setup>

import { HideSidebar } from '@/services/SidebarVisibility.js'

const props = defineProps(['margin']);

var margin = "0px";
if(props.margin) margin = props.margin;

HideSidebar();

</script>

<template>
<div class="document">
    <article :style="'margin-top: ' + margin">
  <slot></slot>
      </article>
  </div>
</template>

<style>
.document { 
  display: flex;
  justify-content: center;
}
article {
  max-width: 800px;
  align-items: center;
}

p {
    margin-bottom: 18px;
}

</style>