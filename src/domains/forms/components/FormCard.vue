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
  color: #ffffff;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 12px;
  padding: 16px;
  background: linear-gradient(135deg, #0b5f3c, #1e8e5e);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.form-card h1 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.form-card:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
