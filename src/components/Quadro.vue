<script setup lang="ts"></script>

<template>
  <div class="content">
    <h1>Caça Palavras</h1>
    <div class="quadro">
      <div class="linha">
        <div class="celula">A</div>
        <div class="celula">B</div>
        <div class="celula">C</div>
        <div class="celula">D</div>
        <div class="celula">E</div>
      </div>
      <div class="linha">
        <div class="celula">F</div>
        <div class="celula">G</div>
        <div class="celula">H</div>
        <div class="celula">I</div>
        <div class="celula">J</div>
      </div>
      <div class="linha">
        <div class="celula">K</div>
        <div class="celula">L</div>
        <div class="celula">M</div>
        <div class="celula">N</div>
        <div class="celula">O</div>
      </div>
      <div class="linha">
        <div class="celula">P</div>
        <div class="celula">Q</div>
        <div class="celula">R</div>
        <div class="celula">S</div>
        <div class="celula">T</div>
      </div>
      <div class="linha">
        <div class="celula">U</div>
        <div class="celula">V</div>
        <div class="celula">W</div>
        <div class="celula">X</div>
        <div class="celula">Y</div>
      </div>
      <div class="linha">
        <div class="celula">Z</div>
        <div class="celula">A</div>
        <div class="celula">B</div>
        <div class="celula">C</div>
        <div class="celula">D</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    
    .quadro {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .linha {
        display: flex;
        gap: 10px;
    }
    
    .celula {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border: 1px solid black;
    }
</style>