<script setup>

import StartPrompt from '@/components/StartPrompt.vue'

function canviarPlaceholder() {
  document.getElementById("input-nom").placeholder = "Que sepas que eres un negro"
}

</script>

<template>
  <body>
    <div class="wrapper">
      <h1>Vols jugar (solo acepto niños)?</h1>
      <div class="input-box">
        <input id="input-nom" type="text" placeholder="Introdueix el teu nom" required>
        <i class='bx bxs-user'></i>
      </div>
      <button v-on:click.prevent="canviarPlaceholder()" type="submit" class="btn">Jugar</button>
    </div>
  </body>
</template>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: #000000;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
  }

  #app {
    grid-template-columns: 1fr;
  }

  .wrapper{
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.418);
    backdrop-filter: blur(9px);
    color: #e90000;
    border-radius: 12px;
    padding: 30px 40px;
  }
    
  .wrapper h1{
    font-size: 36px;
    text-align: center;
  }

  .wrapper .input-box{
    position: relative;
    width: 100%;
    height: 50px;
    
    margin: 30px 0;
  }

  .input-box input{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 2, 2, 0.164);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
  }

  .input-box input::placeholder{
    color: hsl(308, 100%, 50%);
  }

  .input-box i{
    position: absolute;
    right: 20px;
    top: 30%;
    transform: translate(-50%);
    font-size: 20px;

  }
  
  .wrapper .btn{
    width: 100%;
    height: 45px;
    background: #1bb148;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #1900fa;
    font-weight: 600;
  }
  
</style>