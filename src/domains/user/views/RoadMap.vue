<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import Header from "@/domains/reasoning/components/Header.vue";
import Exercise from "@/domains/portuguese/components/Exercise.vue";
import TitleCategories from "../components/TitleCategories.vue";
import { falar } from "@/utils/falar";

import { ref } from "vue";
const mostrarStatus = ref(false);
const go = (rota: string) => {
  window.location.href = rota;
};
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div>
        <Header />
      </div>

      <TitleCategories title="Português" route="/categorias" />

      <div class="container">
        <div
          id="comp"
          class="component component1"
          @click="
            falar('descobrirprimeiraletra', 'descobrirprimeiraletra2', 'pt/letras'),
              (mostrarStatus = true)
          "
        >
          <Exercise
            img="img/icons/letras.png"
            title="palavras Iniciais"
            link="pt/letras"
          />

          <!-- <StatusAtt v-if="mostrarStatus"
                        image="img/roadMap/book.png"
                        title="Seleção de palavras"
                        dificuldade="Fácil"
                        status="Concluído"
                        :tags="[
                            { tag: 'EF01LP02' },
                            { tag: 'EF01LP04' },
                        ]"
                        recorde="10 min"
                        tentativas="10"
                        aproveitamento="80%"
                        link="pt/letras"
                    /> -->
        </div>

        <div
          id="comp1"
          class="component component2"
          @click="falar('descobrirpalavra', 'descobrirpalavra2', 'pt/escrita')"
        >
          <Exercise img="img/roadMap/pencil.png" title="Escrita" link="pt/escrita" />
        </div>
        <div
          id="comp3"
          class="component component3"
          @click="falar('cacapalavras', 'cacapalavras2', 'pt/cacapalavras')"
        >
          <Exercise
            img="img/roadMap/book.png"
            title="Caça palavras"
            link="pt/cacapalavras"
          />
        </div>
        <div id="comp4" class="component component4">
          <Exercise
            img="img/roadMap/horse.png"
            title="Sílabas"
            link="att/silabas"
            @click="go('att/silabas')"
          />
        </div>
        <div id="comp5" class="component component5">
          <Exercise
            img="img/abc.png"
            title="vogais"
            link="att/vogais"
            @click="go('att/vogais')"
          />
        </div>
        <div id="comp6" class="component component6">
          <Exercise
            img="img/abc.png"
            title="consoantes"
            link="att/consoantes"
            @click="go('att/consoantes')"
          />
        </div>
        <!-- <div class="component4" >
                    <Exercise 
                        img="img/roadMap/bike.png"
                        title="Silabário"    
                        link="pt/silabario"
                    />
                </div>
                <div class="component5" >
                    <Exercise 
                        img="img/icons/letras.png"
                        title="Letras"    
                        link="/user/contents/m/2"
                    />
                </div> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 2rem;
  padding: 0rem;
  z-index: 0;
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  height: 500px;
  scroll-behavior: smooth;
  white-space: nowrap;
  scrollbar-color: #28a745 #f5f5f5;
  scrollbar-width: thin;
}

.container::-webkit-scrollbar {
  height: 8px; /* Altura do scroll horizontal */
}

.container::-webkit-scrollbar-thumb {
  background-color: #28a745; /* Cor do scroll */
  border-radius: 10px; /* Bordas arredondadas */
}

.container::-webkit-scrollbar-track {
  background: #f5f5f5; /* Cor do fundo do scroll */
}

.component,
.component .component {
  flex: 0 0 auto; /* Garante que os componentes não encolham ou cresçam */
  width: 150px; /* Define uma largura fixa para os componentes */
  height: 150px; /* Define uma altura fixa para os componentes */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f7e9; /* Cor de fundo verde claro */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animações */
}

.component1:hover,
.component2:hover,
.component3:hover {
  transform: scale(1.05); /* Aumenta o tamanho ao passar o mouse */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Intensifica a sombra */
  background-color: #13457e;
  color: #e0f7e9;
}

#comp,
#comp1,
#comp3 {
  text-align: center;
  cursor: pointer;
  background-color: #3e5a7a;
}
</style>
