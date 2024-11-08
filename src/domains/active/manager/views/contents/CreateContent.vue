<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { adjustUrlYoutube } from "../../utils/adjustUrlYoutube";

export default defineComponent({
  setup() {
    const data = ref({
      image: null as File | null,
      title: "",
      description: "",
      type: "",
      urlImage: "",
      urlsDocuments: [] as File[],
      moduleId: 0,
      activityData: { teste: "teste", teste2: "teste2" } as any,
      urlImagePath: "",
      urlVideo: "",
      urlsDocumentsPaths: [] as string[],
    });

    const modules = ref<{ id: number; title: string }[]>([]);

    onMounted(async () => {
      try {
        const response = await fetch(`https://idipibex.online/api/modules`, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar módulos");
        }

        const result = await response.json();
        modules.value = result;
      } catch (error) {
        console.error(error);
      }
    });

    const serializeActivityData = () => {
      data.value.activityData = JSON.stringify(data.value.activityData);
    };

    const handleFileChange = (event: Event, type: "image" | "document") => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        if (type === "image") {
          data.value.image = file;
        } else if (type === "document") {
          data.value.urlsDocuments.push(file);
        }
      }
    };

    const uploadFile = async (file: File) => {
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

    const createContent = async () => {
      try {
        data.value.urlImagePath = data.value.image
          ? await uploadFile(data.value.image)
          : null; // Promise que retorna uma string com o path da imagem enviada para o servidor
        data.value.urlsDocumentsPaths = await Promise.all(
          data.value.urlsDocuments.map(uploadFile)
        ); // Array de Promises que retorna um array de strings com os paths dos documentos enviados para o servidor
        serializeActivityData();
        data.value.urlVideo = adjustUrlYoutube(data.value.urlVideo);
        const response = await fetch(`https://idipibex.online/api/contents`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({
            Title: data.value.title,
            Description: data.value.description,
            Type: data.value.type,
            UrlImage: data.value.urlImagePath,
            UrlsDocuments: data.value.urlsDocumentsPaths,
            UrlVideo: data.value.urlVideo,
            ActivityData: data.value.activityData,
            ModuleId: data.value.moduleId,
          }),
        });
        if (!response.ok) {
          throw new Error("Erro ao criar conteúdo");
        }
        window.location.href = "/manager/contents";
      } catch (error) {
        console.error(error);
      }
    };

    return { data, modules, handleFileChange, createContent };
  },
});
</script>
<template>
  <div class="container">
    <div class="form">
      <form @submit.prevent="createContent">
        <label for="urlImage">Selecione uma imagem</label>
        <input
          @change="(event) => handleFileChange(event, 'image')"
          name="urlImage"
          type="file"
          placeholder="Imagem do conteúdo"
        />
        <label for="title">Título</label>
        <input
          v-model="data.title"
          name="title"
          type="text"
          placeholder="Título do conteúdo"
        />
        <label for="description">Descrição</label>
        <input
          v-model="data.description"
          name="description"
          type="text"
          placeholder="Descrição do conteúdo"
        />
        <label for="type">Selecione o tipo do conteúdo</label>
        <select v-model="data.type" name="type">
          <option value="ClassRoom">Aula</option>
          <option value="Exercise">Atividade</option>
        </select>

        <label for="moduleId">Selecione o módulo do conteúdo</label>
        <select v-model="data.moduleId" name="moduleId">
          <option v-for="module in modules" :key="module.id" :value="module.id">
            {{ module.title }}
          </option>
        </select>
        <div>
          <h3>Adicionar documento</h3>
          <ul>
            <input
              name="urlDocuments"
              type="file"
              @change="(event) => handleFileChange(event, 'document')"
              placeholder="Documento PDF"
            />
          </ul>
          <h3>Link do YouTube</h3>
          <ul>
            <input
              v-model="data.urlVideo"
              name="urlVideo"
              type="text"
              placeholder="Link do YouTube"
            />
          </ul>
        </div>

        <button type="submit">Criar Conteúdo</button>
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

.letras {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: transparent;
  height: 50px;
  width: 50px;
  color: white;
  border: 1px solid gray;
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
