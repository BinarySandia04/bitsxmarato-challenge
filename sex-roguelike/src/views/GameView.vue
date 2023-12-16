<script setup>
import DocumentSlot from '@/components/slots/DocumentSlot.vue'

var cardLength = undefined;

function CardHover(e) {
  var card = document.getElementById("card");
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;

  console.log(rect.right - rect.left);

  if(cardLength === undefined) cardLength = Math.abs(rect.left - rect.right);

  if(x < cardLength / 3){
    if(!card.classList.contains("card-left")){
      if(card.classList.contains("card-right")) card.classList.remove("card-right");
      card.classList.add("card-left");
    }
  } else if(x > cardLength / 3 * 2) {
    if(!card.classList.contains("card-right")){
      if(card.classList.contains("card-left")) card.classList.remove("card-left");
      card.classList.add("card-right");
    }
  } else {
    if(card.classList.contains("card-left")) card.classList.remove("card-left");
    if(card.classList.contains("card-right")) card.classList.remove("card-right");
  }

  console.log("x: " + x);
};

</script>

<template>
  <div class="ui-container">
    <div class="icon-container">
      <div class="icon" id="icon-health"></div>
      <div class="icon" id="icon-mentalhealth"></div>
      <div class="icon" id="icon-hornyness"></div>
      <div class="icon" id="icon-satisfaction"></div>
    </div>

    
    <div class="question-text">
      Hola
    </div>

    <div class="card-container">
      <div class="card" id="card" v-on:mousemove="CardHover">
          Hola!!
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "node_modules/rpg-awesome/scss/rpg-awesome";

@font-face {
  font-family: RPGAwesome;
  src: url('@/assets/fonts/rpgawesome-webfont.woff');
}

.card-container {

  display: flex;
  width: 100%;

  justify-content: center;
}

.card {
  margin-top: 100px;

  height: 60vh;
  width: calc(60vh / 1.618);

  background-color: var(--color-background-softest);
  border-radius: 25px;
  transition: 0.2s;
}

.card-left:hover {
  margin-right: 50px;
  transform: rotate(-4deg);
}

.card-right:hover {
  margin-left: 50px;
  transform: rotate(4deg);
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.test::after {
  width: 25px;
  height: 25px;
}



.icon {
  &#icon-health::after {
    content: $ra-var-icon-health;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-mentalhealth::after {
    content: $ra-var-icon-light-bulb;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-hornyness::after {
    content: $ra-var-icon-fire;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-satisfaction::after {
    content: $ra-var-icon-acid;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-cash::after {
    font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
    content: '$';
    font-weight: bold;

    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  flex-grow: 1;
  font-size: 64px;
  text-align: center;
  
}

.ui-container {
  background-color: var(--color-background-soft);
  height: 100vh;
  min-width: 900px;
}

.icon-container {
  font-family: 'RPGAwesome';
}

</style>
