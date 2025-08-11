<script setup>
import { ref, watch } from "vue";
import Header from '@/domains/reasoning/components/Header.vue';

const wordsData = [
  { id: "vitoria-regia", word: "VITÓRIA-RÉGIA", syllables: ["VI", "TÓ", "RIA", "-RÉ", "GIA"], definition: "Uma planta aquática gigante..." },
  { id: "desmatamento", word: "DESMATAMENTO", syllables: ["DES", "MA", "TA", "MEN", "TO"], definition: "A retirada da vegetação..." },
  { id: "caatinga", word: "CAATINGA", syllables: ["CAA", "TIN", "GA"], definition: "Um bioma brasileiro caracterizado..." },
  { id: "floresta", word: "FLORESTA", syllables: ["FLO", "RES", "TA"], definition: "Uma grande área coberta..." },
  { id: "reciclagem", word: "RECICLAGEM", syllables: ["RE", "CI", "CLA", "GEM"], definition: "Processo de transformar materiais..." },
  { id: "sustentavel", word: "SUSTENTÁVEL", syllables: ["SUS", "TEN", "TÁ", "VEL"], definition: "Algo que pode ser mantido..." },
  { id: "poluicao", word: "POLUIÇÃO", syllables: ["PO", "LUI", "ÇÃO"], definition: "A contaminação do meio ambiente..." },
];

const currentWordIndex = ref(0);
const currentWordData = ref(wordsData[0]);
const scrambledTiles = ref([]);
const assembledTiles = ref([]);
const feedbackMessage = ref("");
const showDefinition = ref(false);
const isCorrect = ref(false);

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initializeGame() {
  const word = wordsData[currentWordIndex.value];
  currentWordData.value = word;
  scrambledTiles.value = shuffleArray([...word.syllables]);
  assembledTiles.value = Array(word.syllables.length).fill(null);
  feedbackMessage.value = "";
  showDefinition.value = false;
  isCorrect.value = false;
}

watch(currentWordIndex, () => {
  initializeGame();
});

function handleTilePress(tileText, isFromScrambledPool, indexInPool) {
  if (isCorrect.value) return;

  if (isFromScrambledPool) {
    const firstEmptyIndex = assembledTiles.value.findIndex(t => t === null);
    if (firstEmptyIndex !== -1) {
      assembledTiles.value[firstEmptyIndex] = tileText;
      scrambledTiles.value.splice(indexInPool, 1);
    }
  } else {
    const tileIndexInAssembled = assembledTiles.value.indexOf(tileText);
    if (tileIndexInAssembled !== -1) {
      assembledTiles.value[tileIndexInAssembled] = null;
      scrambledTiles.value.push(tileText);
    }
  }
}

function checkWord() {
  const assembledWord = assembledTiles.value.filter(t => t !== null).join("");
  if (assembledWord === currentWordData.value.word) {
    feedbackMessage.value = "Parabéns! Você acertou!";
    showDefinition.value = true;
    isCorrect.value = true;
  } else {
    feedbackMessage.value = "Ops! Tente novamente.";
    showDefinition.value = false;
    isCorrect.value = false;
  }
}

function goToNextWord() {
  currentWordIndex.value = (currentWordIndex.value + 1) % wordsData.length;
}

function resetWord() {
  initializeGame();
}

initializeGame();
</script>

<template>
    <div><Header /></div>

  <div class="container">
    <h1 class="title">Aventura Sustentável</h1>
    <h2 class="subtitle">Quebra-Cabeças de Palavras</h2>

    <p class="instructions">Monte a palavra clicando nas sílabas.</p>

    <div class="assembled-area">
      <button
        v-for="(tile, index) in assembledTiles"
        :key="'assembled-' + index"
        class="tile"
        :class="tile ? 'filled' : 'empty'"
        @click="tile && handleTilePress(tile, false, index)"
      >
        {{ tile || '_' }}
      </button>
    </div>

    <div class="scrambled-area">
      <button
        v-for="(tile, index) in scrambledTiles"
        :key="'scrambled-' + index"
        class="tile unselected"
        @click="handleTilePress(tile, true, index)"
      >
        {{ tile }}
      </button>
    </div>

    <div class="button-container">
      <button
        class="action-btn"
        @click="checkWord"
        :disabled="assembledTiles.includes(null) || isCorrect"
      >
        Verificar
      </button>
      <button class="action-btn" @click="resetWord">
        Reiniciar
      </button>
    </div>

    <p
      v-if="feedbackMessage"
      :class="['feedback', isCorrect ? 'correct' : 'incorrect']"
    >
      {{ feedbackMessage }}
    </p>

    <div v-if="showDefinition" class="definition-box">
      <h3>{{ currentWordData.word }}</h3>
      <p>{{ currentWordData.definition }}</p>
      <button class="next-btn" @click="goToNextWord">
        Próxima Palavra
      </button>
    </div>
  </div>
</template>


<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: #e0f2f7;
  border-radius: 10px;
  height: 100rem;
}

.title {
  font-size: 28px;
  color: #2e8b57;
}

.subtitle {
  font-size: 20px;
  color: #4682b4;
  margin-bottom: 20px;
}
.instructions {
  font-size: 16px;
  margin-bottom: 20px;
}
.assembled-area, .scrambled-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
}
.tile {
  padding: 10px 15px;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid #6a5acd;
  font-weight: bold;
  cursor: pointer;
}
.unselected {
  background: #87ceeb;
  color: #2a2a2a;
}
.filled {
  background: #aef418;
  color: #fdfdfd;
}
.empty {
  background: #f0f8ff;
  border-style: dashed;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.action-btn {
  background: #20b2aa;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
}
.feedback {
  font-size: 18px;
  font-weight: bold;
}
.correct {
  margin-top: 1rem;
  color: green;
}
.incorrect {
  color: crimson;
  margin-top: 1rem;
}
.definition-box {
  background: #137E60;
  color: #fbf8f8;
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
}
.next-btn {
  background: dodgerblue;
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  margin-top: 10px;
}
</style>
