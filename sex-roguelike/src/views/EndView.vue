<script setup>
import FormSlot from '@/components/slots/FormSlot.vue'
import CenteredSlot from '@/components/slots/CenteredSlot.vue'
import { useRouter } from 'vue-router'
import Player from '@/services/Player.js'
import {createApp, ref,onMounted} from 'vue'

const router = useRouter();

const finalMessageRef = ref("");

onMounted(() => {
  finalMessageRef.value = window.localStorage.getItem("finalMessage");
})

function Jugar() {
  var name = document.getElementById('input-nom').value;
  ResetStats();

  window.Player.name = name;

  router.push("/game");
}

function ResetStats() {
    var player = window.Player;
    player.health = 50
    player.mental_health = 50
    player.hornyness = 50
    player.satisfaction = 50
    player.money = 50
    
    player.ganas=false; // de follar
    player.sida=false; //vih
    player.disfuncion=false; //erectil

    player.age = 12;
    player.dying_age = parseInt(Math.random() * 81 + 19);
}

</script>

<template>
  <CenteredSlot>
    <FormSlot>
      <h1 class="centered-title">Has perdut</h1>
      <div class="wrapper">
        <p class="centered">{{ finalMessageRef }}</p>
      <h1>Vols tornar a jugar?</h1>
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

.centered {
    text-align: center;
}

.play-button {
  width: 100%;
  background-color: rgb(78, 153, 78);
}

.play-button:hover {
  background-color: rgb(99, 192, 99);
}

.centered-title {
  width: 100%;
  text-align: center;

  margin-top: 30px;
  justify-content: left;
  padding-bottom: 30px;

  background: linear-gradient(90deg, var(--c-gradient-col-red-1) 0%, var(--c-gradient-col-red-2) 21%, var(--c-gradient-col-red-3) 50%, var(--c-gradient-col-red-2) 76%, var(--c-gradient-col-red-1) 100%);

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
