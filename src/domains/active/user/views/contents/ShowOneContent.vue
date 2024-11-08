<script lang="ts">
import { adjusteUrlFiles } from "@/utils/adjusteUrlFiles";
import { deserializecontent } from "@/utils/deserialize";
import { falar } from "@/utils/utils";
import { verifica, start } from "@/utils/verifica";
import { defineComponent, onMounted, ref } from "vue";
import VideoAula from "../../components/contents/Video.vue";
import { useRoute } from "vue-router";


function rodarVideo(videoRef) {
  videoRef.value?.scrollIntoView({ behavior: "smooth" });
}

export default defineComponent({
  setup() {
    const content = ref({
      id: 0,
      title: "",
      description: "",
      type: "",
      activityData: {},
      urlImage: "",
      urlVideo: "",
      urlDocument: "",
      urlsDocuments: [],
      moduleId: 0,
    });

    const route = useRoute();
    const showVideo = ref(false);
    const videoRef = ref(null);

    const fetchData = async (id) => {
      try {
        const response = await fetch(`https://idipibex.online/api/contents/${id}`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar atividades");
        }

        const result = await response.json();
        content.value = result;

        content.value.urlDocument = adjusteUrlFiles(
          content.value.urlsDocuments[0],
          "document"
        );
        content.value.urlImage = adjusteUrlFiles(content.value.urlImage, "image");
        content.value.activityData = deserializecontent(result.activityData);
      } catch (error) {
        console.error(error);
      }
    };

    function handleVideoClick() {
      showVideo.value = !showVideo.value;
      rodarVideo(videoRef);
    }

    onMounted(() => {
      const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
      fetchData(id);
    });

    return {
      content,
      showVideo,
      handleVideoClick,
      videoRef,
      falar,
      verifica,
      start,
    };
  },
}); 

</script>

<template>
   <div class="containe">
      <div class="background" v-if="showVideo">
        <iframe
          class="youtube-video"
          width="560"
          height="315"
          :src="content.urlVideo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          ref="videoRef"
        ></iframe>
      </div>
    </div>

    <div class="form">
      <div class="info">
        <h1 class="title" for="title">{{ content.title }}</h1>
        <p class="description">{{ content.description }}</p>

        <div class="documents" v-if="content.urlDocument">
            <a :href="'https://idipibex.online' + content.urlDocument" target="_blank">
              <img class="icon" src="img/icons/pdf.svg"> 
            </a>
            <div @click="handleVideoClick">
              <img action class="iconImg" src="img/icons/video.png" />
            </div>
        </div>
      </div>

      <div
        v-if="content.type == 'Assets' || content.type == 'ClassRoom'"
        class="container-letras"
      >
        <ul v-for="(prop, type) in content.activityData" :key="type">
          <label v-if="type != 'urlSounds'" :for="type"> {{ type }}</label>
          <div :class="'container-' + type">
            <button
              @click="() => falar(String(letra))"
              v-if="type != 'urlSounds'"
              :class="[type, { 'active-video': showVideo }]"
              v-for="(letra, index) in prop"
              :key="index"
              >
              {{ letra }}
            </button>
          </div>
        </ul>
      </div>
      <div v-if="content.type == 'Exercise'" class="container-letras">
        <ul v-for="(prop, type) in content.activityData" :key="type">
          <label v-if="type != 'urlSounds'" :for="type"> {{ type }}</label>
          <button v-if="type != 'urlSounds'" @click="() => start(prop)" class="start">
            iniciar atividade
          </button>
          <div :class="'container-' + type">
            <button
              @click="() => verifica(String(letra), content.moduleId)"
              v-if="type != 'urlSounds'"
              :class="[type, { 'active-video': showVideo }]"
              v-for="(letra, index) in prop"
              :key="index"
            >
              {{ letra }}
            </button>
          </div>
        </ul>
      </div>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  text-align: center;
}

.container-vogais,
.container-consoantes,
.container-alfabeto {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  align-items: initial;
  justify-content: center;
  padding: 50px 10px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
}
.documents {
  display: flex;
  margin-top: 10px;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  margin-top: 10px;
  color: #249B9B;
  font-weight: bold;
}

p {
  color: black;
  font-weight: bold;
  text-align: center;
}

.icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.iconImg {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

ul {
  text-align: center;
  margin-top: 10px;
}
.start {
  background-color: red;
  margin: 0 auto;
}

.vogais,
.consoantes,
.alfabeto {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: white;
  height: 65px;
  width: 65px;
  color: black;
  font-size: 50px;
  font-weight: 200;
  border: 1px solid black;
  border-radius: 50%;
}

.active-video {
  height: 50px;
  width: 50px;
  font-size: 40px;
  transform: scale(1.05);
}

.background {
  background-color: #249B9B;
  height: 15rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.youtube-video {
  position: relative;
  bottom: 0;
  width: 90%;
  height: 80%;
}

.documents > label {
  font-size: large;
  color: #2e2e2e;
  font-weight: bold;
}

.documents > button > a {
  color: white;
  font-weight: 600;
}

.documents > button {
  margin-top: 10px;
  height: 60px;
  line-height: 40px;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  color: black;
  border: 1px solid #2e2e2e;
  background-color: #2e2e2e;
  transition: 0.5s;
}

button:hover {
  transition: 0.5s;
  background-color: #249B9B;
}

.youtube-video iframe {
  width: 100%;
  height: 100%;
}

.fundo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: transparent;
}

.fundo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Faz com que a imagem preencha a div, cortando partes da imagem se necessário */
}

select {
  width: 100px;
}

label {
  font-size: large;
  color: #2e2e2e;
  font-weight: bold;
}

h3 {
  font-size: large;
  color: #2e2e2e;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  padding: 5px;
  color: white;
}

input {
  border: 2px solid #249B9B;
  color: #2e2e2e;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
}

input:focus {
  background-color: #249B9B;
  border: 2px solid #249B9B;
  color: white;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
}

::placeholder {
  color: gray;
}

.containe-campo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  color: white;
}

.campo {
  display: flex;
  gap: 10px;
  padding: 0px;
  margin: 0px;
  align-items: center;
  text-align: center;
}

.remove {
  background-color: red;
  color: white;
  border: 1px solid red;
  border-radius: 5px;
  padding: 0px;
  width: 80px;
  height: 50px;
  margin: 0px;
}

.create {
  display: flex;
  flex-direction: column;
  background-color: green;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 0px;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 200;
}

select {
  border: 2px solid #249B9B;
  color: #2e2e2e;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
}

button {
  margin: 0 auto;
  height: 60px;
  width: 300px;
  line-height: 40px;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  color: white;
  background-color: #249B9B;
}
</style>
