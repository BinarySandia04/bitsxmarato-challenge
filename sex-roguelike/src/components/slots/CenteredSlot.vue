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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
article {
  max-width: 800px;
  align-items: center;
  margin-top: -50px; /* Hack per pujar-lo una mica */
}

p {
    margin-bottom: 18px;
}

h1 {
  text-align: center;
  padding-bottom: 30px;
}

</style>