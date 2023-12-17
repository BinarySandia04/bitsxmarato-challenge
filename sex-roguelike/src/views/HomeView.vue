<script setup>
import FormSlot from '@/components/slots/FormSlot.vue'
import CenteredSlot from '@/components/slots/CenteredSlot.vue'
import { useRouter } from 'vue-router'
import Player from '@/services/Player.js'
import {createApp} from 'vue'

const router = useRouter();

function Jugar() {
  var name = document.getElementById('input-nom').value;

  window.Player.name = name;

  console.log(window.Player);

  router.push("/game");
}

</script>

<template>
  <CenteredSlot>
    <FormSlot>
      <h1 class="centered-title">Risk of Sex 2</h1>
      
      <div class="wrapper">
      <h1>Vols jugar?</h1>
      <h2>Instruccions:</h2>
      <p>Cada targeta planteja una questió diferent relacionada amb la sexualitat que passa al llarg d'una vida. El teu objectiu es procurar sobreviure el màxim de temps possible.</p>
      <p>Ves amb compte! Ja que tindràs cuatre atributs diferents:</p>
      <ul>
        <li>Salut</li>
        <li>Salut mental</li>
        <li>Satisfacció</li>
        <li>Calentura</li>
      </ul>
      Has d'intentar que cap d'ells arribi al màxim o al mínim (excepte el de salut). Bona sort!
      <div class="input-box">
        <input id="input-nom" type="text" placeholder="Introdueix el teu nom" required>
        <i class='bx bxs-user'></i>
      </div>
      <button v-on:click.prevent="Jugar()" type="submit" class="play-button">Jugar</button>
    </div>

    </FormSlot>
  </CenteredSlot>
</template>


<style lang="scss" scoped>

.play-button {
  width: 100%;
  background-color: rgb(78, 153, 78);
}

.play-button:hover {
  background-color: rgb(99, 192, 99);
}

.centered-title {
  margin-top: 30px;
  justify-content: center;
  padding-bottom: 30px;
  
  width: 100%;
  text-align: center;
  background: linear-gradient(90deg, var(--c-gradient-col-1) 0%, var(--c-gradient-col-2) 21%, var(--c-gradient-col-3) 50%, var(--c-gradient-col-2) 76%, var(--c-gradient-col-1) 100%);

  animation: gradient 30s linear infinite;

  -webkit-background-clip: text;
	background-size: 400% 400%;
  -webkit-text-fill-color: transparent;
}

@keyframes gradient {
  0% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 400% 0%;
	}
}
.wrapper{
    width: 800px;
    vertical-align: center;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.418);
    backdrop-filter: blur(9px);
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
    border: 2px solid rgba(151, 151, 151, 0.164);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
  }
  
  .input-box i{
    position: absolute;
    right: 20px;
    top: 30%;
    transform: translate(-50%);
    font-size: 20px;
  }


</style>
