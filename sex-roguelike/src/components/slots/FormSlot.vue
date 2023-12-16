<script setup>
</script>

<template>
<div class="form-slot">
  <slot></slot>
  </div>
</template>

<style>

.form-field {
    display: flex;
    flex-direction: column;
    min-width: 600px;
    margin-top: 20px;
}

.centered {
    text-align: center;
}

.underline {
    text-decoration: underline;
}

</style>