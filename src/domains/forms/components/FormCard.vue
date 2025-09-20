<template>
  <div class="form-card" @click="navigateToLink">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>

export default {
  name: "FormCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateToLink() {
      window.location.href = this.link;
    },
  },
};
</script>

<style scoped>
.form-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2e2e2e;
  width: 100%;
  height: 80px;
  border: 2px solid #0b5f3c; /* Borda mais destacada */
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08); /* Sombra mais suave */
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.form-card:hover {
  transform: scale(1.05);
  background-color: #f0f8ff; /* Mudança de cor de fundo no hover */
}

.form-card__image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  margin-bottom: 16px;
}

.form-card__title {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: bold;
}
</style>
