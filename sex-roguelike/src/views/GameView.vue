<script setup>
import DocumentSlot from '@/components/slots/DocumentSlot.vue'

import { ref, onMounted} from "vue";

import Card from '@/services/Card.js'

import cardsData from '@/services/Data/Cards.json'

import { useRouter } from 'vue-router'

const router = useRouter();

var cardLength = undefined;
var cardDirection = undefined;

var currentCardImage = "latest";

var nextImage = undefined;

var currentCard = new Card(cardsData[0]);

var previousCard = new Card(cardsData[0]);

var player = window.Player;

const question_text = ref("");

const answer_left_text = ref("");
const answer_right_text = ref("");

const display_answer_left_text = ref("");
const display_answer_right_text = ref("");

const money_quantity = ref("");

onMounted(() => {
  ChangeViewStats();
  PickRandomCard();

  display_answer_left_text.value = currentCard.answer_left;
  display_answer_right_text.value = currentCard.answer_right;

  money_quantity.value = player.money;
})

function PickRandomCard() {
  var image = document.getElementById("card-image");

  previousCard = currentCard;

  var same = true;
  while (same) {
    var cardPosition = parseInt(Math.random() * (cardsData.length-1));
    currentCard = new Card(cardsData[cardPosition]);
    if (previousCard.question != currentCard.question) same = false;
  }

  if(nextImage === undefined) image.src = "images/" + currentCard.image;
  nextImage = currentCard.image;
  
  question_text.value = currentCard.question;
  answer_left_text.value = currentCard.answer_left;
  answer_right_text.value = currentCard.answer_right;
}

function CardHover(e) {
  var card = document.getElementById("card");

  var answerLeft  = document.getElementById("answer-left");
  var answerRight = document.getElementById("answer-right");

  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  if(cardLength === undefined) cardLength = Math.abs(rect.left - rect.right);

  if(x < cardLength / 3){
    if(!card.classList.contains("card-left")){
      card.classList.remove("card-right");
      card.classList.add("card-left");  


      cardDirection = "left";
    }
  } else if(x > cardLength / 3 * 2) {
      card.classList.remove("card-left");
      card.classList.add("card-right");
      cardDirection = "right";
  } else {
    card.classList.remove("card-left");
    card.classList.remove("card-right");
    

    cardDirection = undefined;
    answerLeft.classList.remove("shown");
    answerRight.classList.remove("shown");
  }

  if(!cardDirection){
    answerLeft.classList.remove("shown");
    answerRight.classList.remove("shown");
  } else if(cardDirection == "right"){
    answerRight.classList.add("shown");
  } else {
    answerLeft.classList.add("shown");
  }
};

function CardLeave(e) {
  var card = document.getElementById("card");
  var answerLeft  = document.getElementById("answer-left");
  var answerRight = document.getElementById("answer-right");
  
  cardDirection = undefined;


  card.classList.remove("card-right");
  card.classList.remove("card-left");
  answerLeft.classList.remove("shown");
  answerRight.classList.remove("shown");
}

function CardClick(event){
  var image = document.getElementById("card-image");
  var card = document.getElementById("card");
  var answerLeft  = document.getElementById("answer-left");
  var answerRight = document.getElementById("answer-right");

  if (cardDirection != undefined) {
    player.money+=3;
    card.style.transitionDuration = "0.2s";
    if (cardDirection == "left") {
      player.AddStats(currentCard.consequences_left);

      money_quantity.value = player.money;

      card.style.transform = "translateX(-30vw)";
      card.style.opacity = 0;

      answerRight.style.opacity = 0;
      answerLeft.style.opacity = 0;

      setTimeout(() => {
        card.style.transform = "translateY(-10vw)";
        image.src = "images/" + currentCard.image;
        setTimeout(() => {
          card.style.opacity = 1;
          card.style.transform = "";

          answerRight.style.removeProperty('opacity');
          answerLeft.style.removeProperty('opacity');

          display_answer_left_text.value = currentCard.answer_left;
          display_answer_right_text.value = currentCard.answer_right;
        }, 400);
      }, 200);
    }
    else {
      player.AddStats(currentCard.consequences_right);

      money_quantity.value = player.money;

      card.style.transform = "translateX(30vw)";
      card.style.opacity = 0;

      answerRight.style.opacity = 0;
      answerLeft.style.opacity = 0;

      setTimeout(() => {
        card.style.transform = "translateY(-10vw)";
        image.src = "images/" + currentCard.image;
        setTimeout(() => {
          card.style.opacity = 1;
          card.style.transform = "";

          answerRight.style.removeProperty('opacity');
          answerLeft.style.removeProperty('opacity');
          
          display_answer_left_text.value = currentCard.answer_left;
          display_answer_right_text.value = currentCard.answer_right;
        }, 400);
      }, 200);
    }

    var message = undefined;
    if(player.health <= 0) {
      message = "Després de no seguir bons consells sobre sexualitat, has agafat alguna ETS";
    }
    if(player.mental_health <= 0 ){
      message = "Has desenvolupat depressió"
    }
    if(player.hornyness <= 0){
      message = "La teva vida sexual s'ha apagat";
    }
    if(player.hornyness >= 100){
      message = "Has estat massa temps sense desfogarte... estas molt frustrat";
    }
    if(player.satisfaction <= 0){
      message = "La teva vida sexual ha esdevingut nula";
    }
    if(player.satisfaction >= 100){
      message = "Estás esgotat...";
    }

    if(player.money <= 0){
      message = "T'has quedat sense diners."
    }

    if(message){
      window.localStorage.setItem("finalMessage", message);
      router.push("/end");
    }

    ChangeViewStats();
    PickRandomCard();
  }

  event.preventDefault();
};

function ChangeViewStats() {
  UpdateIconStatus("health", player.health/100);
  UpdateIconStatus("mentalhealth", player.mental_health/100);
  UpdateIconStatus("hornyness", player.hornyness/100);
  UpdateIconStatus("satisfaction", player.satisfaction/100);
}

// attribute_name: "health", "hornyness", ....
// value va de 0 a 1
function UpdateIconStatus(attribute_name, value){
  var element = document.getElementById("icon-" + attribute_name);

  var color = colorGradient(value, {
    red: 255,
    green: 0,
    blue: 0
  }, {
    red: 255,
    green: 255,
    blue: 0
  }, {
    red: 0,
    green: 255,
    blue: 0
  });

  element.style.setProperty("--background-image", "linear-gradient(0deg, " + color + " 0%, " + color + " " + parseInt(value * 100) + 
    "%, #1c1c1c " + (parseInt(value * 100) + 0.01) + "%, #1c1c1c 100%)");
}

function colorGradient(fadeFraction, rgbColor1, rgbColor2, rgbColor3) {
    var color1 = rgbColor1;
    var color2 = rgbColor2;
    var fade = fadeFraction;

    if (rgbColor3) {
      fade = fade * 2;

      // Find which interval to use and adjust the fade percentage
      if (fade >= 1) {
        fade -= 1;
        color1 = rgbColor2;
        color2 = rgbColor3;
      }
    }

    var diffRed = color2.red - color1.red;
    var diffGreen = color2.green - color1.green;
    var diffBlue = color2.blue - color1.blue;


    var gradient = {
      red: parseInt(Math.floor(color1.red + (diffRed * fade)), 10),
      green: parseInt(Math.floor(color1.green + (diffGreen * fade)), 10),
      blue: parseInt(Math.floor(color1.blue + (diffBlue * fade)), 10),
    };

    return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
}

</script>

<template>
  <div class="answer answer-left" id="answer-left">{{ display_answer_left_text }}</div>
  <div class="answer answer-right" id="answer-right">{{ display_answer_right_text }}</div>
  <div class="ui-container">
    <div class="icon-container">
      <div class="icon" id="icon-health"></div>
      <div class="icon" id="icon-mentalhealth"></div>
      <div class="icon" id="icon-hornyness"></div>
      <div class="icon" id="icon-satisfaction"></div>
    </div>

    
    <div class="question-text">
      {{ question_text }}
    </div>

    <div class="card-container">
      <div class="card" id="card" v-on:mousemove="CardHover" v-on:click.prevent="CardClick" v-on:mouseleave="CardLeave">
        <div class="card-image-container">
          <img class="card-image" id="card-image">
        </div>
      </div>
    </div>

    <div class="space"></div>

    <div class="footer-info">
      <div class="footer-container player-info">
        <div class="player-name"><b>{{ player.name }}</b><br>Diners: {{ money_quantity }}€</div>
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

.footer-container {
  flex-grow: 1;

  &.buffs-info {
    font-size: 2vh;
  }
}

.player-name {
  font-size: 3vh;
  text-align: center;
  vertical-align: center;
  margin-top: 5vh;
}

.footer-info {
  width: 100%;
  height: 20vh;

  display: flex;
}

.space {
  height: 45vh;
}

.answer {
  position: absolute;
  font-size: 32px;
  text-align: center;
  z-index: 9;
  background-color: var(--color-background-softest);
  border-radius: 20px;
  padding: 20px;

  opacity: 0;
  transition: opacity .3s;
  word-wrap: break-word;
  width: 18vw;
}

.answer-left {
  margin-right: 60vw;
}

.answer-right {
  margin-left: 60vw;
}

.shown {
  opacity: 1;
}

.question-text {
  text-align: center;
  width: 800px;
  margin-left: 50px;
  margin-right: 50px;
  height: 200px;

  word-wrap: break-word;

  font-size: 3vh;
  margin-bottom: 40px;
}

.card-container {

  display: flex;
  width: 100%;

  justify-content: center;

}

.card {
  height: 50vh;
  width: calc(60vh / 1.618);

  background-color: var(--color-background-softest);
  border-radius: 25px;
  transition: 0.2s;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 25vh;

  z-index: 3;
}

.card-image {
  height: 30vh;
  width: 30vh;
  border-radius: 20px;
}

.card-image-container {
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 30px;
}

.card-left:hover {
  margin-right: 5.2vh;
  transform: rotate(-10deg);
}

.card-left-2 {
  margin-right: 3vh;
  transform: rotate(-6deg);
}

.card-right-2 {
  margin-left: 3vh;
  transform: rotate(6deg);
}

.card-right:hover {
  margin-left: 5.2vh;
  transform: rotate(10deg);
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

  &#icon-health {
    --background-image: linear-gradient(0deg, #1c1c1c, #1c1c1c)
  }

  &#icon-mentalhealth{
    --background-image: linear-gradient(0deg, #1c1c1c, #1c1c1c)
  }

  &#icon-hornyness {
    --background-image: linear-gradient(0deg, #1c1c1c, #1c1c1c)
  }

  &#icon-satisfaction {
    --background-image: linear-gradient(0deg, #1c1c1c, #1c1c1c)
  }

  &#icon-health::after {
    content: $ra-var-icon-health;
    background-image: var(--background-image);

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-mentalhealth::after {
    content: $ra-var-icon-light-bulb;
    background-image: var(--background-image);

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-hornyness::after {
    content: $ra-var-icon-fire;
    background-image: var(--background-image);
    
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }

  &#icon-satisfaction::after {
    content: $ra-var-icon-acid;
    background-image: var(--background-image);
    
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
  font-size: 5vh;
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

* {
  user-select: none;
}

</style>
