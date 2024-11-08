<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { adjustUrlYoutube } from "../../utils/adjustUrlYoutube";

export default defineComponent({
  setup() {
    const data = ref({
      id: 0,
      document: null as File | null,
      title: "",
      description: "",
      type: "",
      urlImage: "",
      urlVideo: "",
      urlDocument: "",
      urlsDocuments: [] as string[],
      moduleId: 0,
      urlsImages: [],
      activityData: {} as { [key: string]: any },
      activityDataSerialized: {},
    });

    const route = useRoute();

    const handleFileChange = (event: Event, type: "document") => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        if (type === "document") {
          data.value.urlsDocuments.push(file.name);
        }
      }
    };
    const deserializeData = (dataString: string) => {
      try {
        data.value.activityData = JSON.parse(dataString);
      } catch (error) {
        console.error("Failed to deserialize data:", error);
      }
    };
    const serializeData = () => {
      try {
        data.value.activityDataSerialized = JSON.stringify(data.value.activityData);
      } catch (error) {
        console.error("Failed to serialize data:", error);
      }
    };

    const fetchData = async (id: string) => {
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
        data.value = result;
        // Substitua /app/UploadedFiles por /images
        if (data.value.urlImage && data.value.urlImage.includes("/app/wwwroot")) {
          data.value.urlImage = data.value.urlImage.replace("/app/wwwroot", "/");
        } else if (
          data.value.urlImage &&
          data.value.urlImage.includes(
            "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/"
          )
        ) {
          data.value.urlImage = data.value.urlImage.replace(
            "/home/double/Repo/CapacitaDigital/CapacitaDigitalApi/wwwroot/images",
            "/images"
          );
        } else if (
          data.value.urlImage &&
          data.value.urlImage.includes("/images/images/")
        ) {
          data.value.urlImage = data.value.urlImage.replace("/images/images/", "/images");
        }
        deserializeData(result.activityData); // Supondo que a string JSON esteja em result.activityData
      } catch (error) {
        console.error(error);
      }
    };
    const addArrayItem = (key: string) => {
      if (Array.isArray(data.value.activityData[key])) {
        data.value.activityData[key].push("");
      }
    };

    const removeArrayItem = (key: string, index: number) => {
      if (Array.isArray(data.value.activityData[key])) {
        data.value.activityData[key].splice(index, 1);
      }
    };
    const fetchUrlImages = async () => {
      try {
        const response = await fetch("https://idipibex.online/api/images", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar imagens");
        }

        return await response.json();
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchUrlDocuments = async () => {
      try {
        const response = await fetch("https://idipibex.online/api/documents/", {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar documentos");
        }

        const result = await response.json();
        data.value.urlsDocuments = result;
        console.log("Documentos:", data.value.urlsDocuments);
      } catch (error) {
        console.error(error);
      }
    };
    const remove = async () => {
      try {
        const response = await fetch(
          `https://idipibex.online/api/contents/${data.value.id}`,
          {
            method: "DELETE",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao deletar atividades");
        }
        console.log("atividade deletada!");
        window.location.href = "/manager/contents";
      } catch (error) {
        console.error(error);
      }
    };

    const updateData = async () => {
      try {
        serializeData();
        data.value.urlVideo = adjustUrlYoutube(data.value.urlVideo);
        const response = await fetch(
          `https://idipibex.online/api/contents/${data.value.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              id: data.value.id,
              title: data.value.title,
              description: data.value.description,
              type: data.value.type,
              activityData: data.value.activityDataSerialized,
              urlImage: data.value.urlImage,
              urlVideo: data.value.urlVideo,
              urlsDocuments: data.value.urlsDocuments,
              ModuleId: data.value.moduleId,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Erro ao atualizar atividades");
        }
        console.log("dados atualizados!");
        window.location.href = "/manager/contents";
      } catch (error) {
        console.error(error);
      }
    };
    const addDocument = () => {
      data.value.urlsDocuments.push("");
    };

    const removeDocument = (index: number) => {
      data.value.urlsDocuments.splice(index, 1);
    };

    const uploadDocument = async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(`https://idipibex.online/api/contents/upload`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Erro ao fazer upload do arquivo");
        }

        const result = await response.json();
        return result.filePath;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    onMounted(() => {
      const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
      fetchData(id);
      // fetchUrlDocuments();
      fetchUrlImages().then((images) => {
        data.value.urlsImages = images;
      });
    });

    return {
      addArrayItem,
      removeArrayItem,
      remove,
      data,
      updateData,
      removeDocument,
      addDocument,
      uploadDocument,
      handleFileChange,
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="fundo">
      <img :src="'https://idipibex.online/api/' + data.urlImage" :alt="data.urlImage" />
    </div>
    <div class="form">
      <form @submit.prevent="updateData">
        <label for="urlImage">Imagem</label>
        <select v-model="data.urlImage" name="urlImage">
          <option
            class="option"
            v-for="image in data.urlsImages"
            :key="image"
            :value="image"
          >
            <li>{{ (image as string).split('/').pop() }}</li>
          </option>
        </select>

        <label for="title">Título</label>
        <input v-model="data.title" name="title" type="text" />

        <label for="description">Descrição</label>
        <input v-model="data.description" name="description" type="text" />

        <label for="urlVideo">youtube video</label>
        <input v-model="data.urlVideo" name="urlvideo" type="text" />
        <label for="type">Tipo</label>

        <select v-model="data.type" name="type">
          <option value="ClassRoom">Aula</option>
          <option value="Exercise">Atividade</option>
          <option value="Assets">Recurso</option>
        </select>

        <div>
          <label>Dados da atividade</label>

          <h3>{{ data.activityData }}</h3>
          <div v-for="(value, key) in data.activityData" :key="key">
            <label :for="key.toString()">{{ key }}</label>
            <div class="containe-campo" v-if="Array.isArray(value)">
              <div class="campo" v-for="(item, index) in value" :key="index">
                <div v-if="key == 'vogais'">
                  <input
                    class="letras"
                    :id="`${key}-${index}`"
                    v-model="data.activityData[key][index]"
                    @input="
                      data.activityData[key][index] = data.activityData[key][
                        index
                      ].toUpperCase()
                    "
                    type="text"
                  />
                </div>
                <div v-else>
                  <input
                    :id="`${key}-${index}`"
                    v-model="data.activityData[key][index]"
                    type="text"
                  />
                </div>
                <button
                  class="remove"
                  type="button"
                  @click="removeArrayItem(key.toString(), index)"
                >
                  Remover
                </button>
              </div>
              <button class="create" type="button" @click="addArrayItem(key.toString())">
                +
              </button>
            </div>
            <div v-else>
              <input :id="key.toString()" v-model="data.activityData[key]" type="text" />
            </div>
          </div>
        </div>
        <button type="submit">atualizar</button>
        <button @click="remove">remover</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
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
  height: 100vh;
  gap: 10px;
  padding: 5px;
  color: white;
}

input {
  border: 2px solid brown;
  color: #2e2e2e;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
}

input:focus {
  background-color: brown;
  border: 2px solid brown;
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

.letras {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: white;
  height: 50px;
  width: 50px;
  color: black;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 50%;
}

select {
  border: 2px solid brown;
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
  background-color: brown;
}
</style>
