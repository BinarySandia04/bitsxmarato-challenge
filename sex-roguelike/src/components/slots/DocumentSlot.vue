<script setup>
</script>

<template>
<div class="document">
    <article>
  <slot></slot>
      </article>
  </div>
</template>

<style scoped>
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