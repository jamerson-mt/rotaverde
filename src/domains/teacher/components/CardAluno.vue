<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: false,
    },
    shapeColor: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    averageTime: {
      type: String,
      required: true,
    },
    classGroup: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="card" >
    <div class="content" >
      <div class="header">
        <div class="user">
          <h3>{{ title }}</h3>
          
        </div>
        <span>
          <b>Turma:</b>
          <p>{{ classGroup }}</p>
        </span>
      </div>
      <div class="main-content">
        <span
          ><b>Tempo médio de resposta:</b>
          <p>{{ averageTime }}</p></span
        >
       
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  text-decoration: none;
  color: aliceblue;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.content {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: auto;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 12px;
  border: 1px solid #212525;
  padding: 1rem;
  overflow: hidden;
}

b {
  font-weight: 600;
  font-size: 16px;
  color: #2e2e2e; /* Cor ajustada para os títulos */
}

.main-content {
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  gap: 0.5rem;
}

h2 {
  font-weight: 500;
  font-size: 16px;
  color: #2e2e2e; /* Cor ajustada para os títulos */
}

h3 {
  font-weight: 600;
  font-size: 20px;
  color: #2e2e2e; /* Cor ajustada para os títulos */
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

span {
  display: flex;
  color: #212525;
  gap: 0.4rem;
  font-size: 18px;
  font-weight: 500;
}

p {
  font-weight: 600;
  font-size: 18px;
  color: #004d40; /* Cor ajustada para as respostas */
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.content img {
  position: relative;
  width: 4em;
  background-color: aliceblue;
  border-radius: 50%;
}

.content #info {
  max-width: 2rem;
}

.title {
  position: relative;
  top: 1rem;
  left: -1rem;
  font-size: 18px;
  color: aliceblue;
  font-weight: bold;
}

@media (max-width: 768px) {
  .content {
    width: 90%;
    padding: 0.8rem;
  }

  h3 {
    font-size: 18px;
  }

  span {
    font-size: 16px;
  }

  p {
    font-size: 16px;
  }
}
</style>
