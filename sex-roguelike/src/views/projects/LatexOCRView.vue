<script setup>
import MinimalSlot from '@/components/slots/MinimalSlot.vue'
import HomeBar from '@/components/partials/HomeBar.vue'

import Api from '@/services/Api.js'

import { ref } from 'vue';

const result = ref('');
const status = ref('Enganxa aquí una imatge!');
const status2 = ref('Ctrl + V');

const copyStatus = ref('');

function CopyResult(){
    navigator.clipboard.writeText(result.value);
    copyStatus.value = "Text copiat correctament!"
}

function SendImage(blob){

    console.log("Gasjakjsk")
    console.log(blob);

    var formData = new FormData();
    formData.append("file", blob);
    //formData.append("name", file.name);
    //formData.append("description", "Imatge pujada des del blog");
    // formData.append("featured", false);

    Api().post('/latexocr/predict', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        console.log(response.data.result);
        result.value = response.data.result;

        status.value = "Enganxa aquí una imatge!";
        status2.value = "Ctrl + V";
    });
}

document.onpaste = function(event){
    copyStatus.value = "";

  var items = (event.clipboardData || event.originalEvent.clipboardData).items;
  console.log(JSON.stringify(items)); // will give you the mime types
  for (var index in items) {
    var item = items[index];
    if (item.kind === 'file') {
        var blob = item.getAsFile();


        status.value = "Carregant...";
        status2.value = "";

        SendImage(blob);
        return;
    }
  }

  status.value = "No has enganxat cap imatge";
}

</script>

<template>
    <MinimalSlot margin="50px">
        <HomeBar></HomeBar>
        <h1>LatexOCR</h1>
        <p>Transforma les teves imatges a codi LaTeX que pots copiar després!</p>
        <p>Projecte original: <a href="https://github.com/lukas-blecher/LaTeX-OCR">https://github.com/lukas-blecher/LaTeX-OCR</a></p>
        <div class="big-paste-space"><span>{{status}}</span>
            <span>{{ status2 }}</span></div>
        <div v-if="result != ''" class="result-container">
            <p>Resultat:</p>
            <pre>{{ result }}</pre>
            <button v-on:click="CopyResult">Copiar</button>
            <br>
            <span class="copy-status">{{ copyStatus }}</span>
        </div>
    </MinimalSlot>
</template>


<style lang="scss">
.big-paste-space {
    border-style: dashed;
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    min-width: 600px;
    min-height: 400px;
    display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
    text-align: center;
}

.copy-status {
    color: var(--c-text-green);
}

.result-container {

    padding-top: 20px;
    pre {
        background-color: black;
        border-radius: 8px;
        padding: 8px;
        margin-bottom: 10px;

        max-width: 600px;

        word-wrap: break-word;
        white-space: pre-wrap;
        word-break: break-word;
    }
}
</style>
