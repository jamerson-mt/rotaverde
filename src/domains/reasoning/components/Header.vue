<script setup>
</script>

<template>
    <div class="toolbar">
      <div id="image" class="w-16 left-5">
        <img src="/public/img/iconesSustentabilidade/reciclagem.png" />
        <img src="/public/img/iconesSustentabilidade/planta.png" />
        <img src="/public/img/iconesSustentabilidade/agua.png" />
      </div>
      <div class="menu">
        <div>
          <img src="/public/img/IconsHome/grupo.png" alt="">
          <p>Turma 1</p>
        </div>
        <div>
          <img src="/public/img/IconsHome/formatura.png" alt="">
          <p>2° Ano</p>
        </div>
        <div>
          <img src="/public/img/IconsHome/vitoria.png" alt="">
          <p>2° Lugar</p>
        </div>
      </div>
  </div>
</template>

<style scoped>
.toolbar {
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -40px;
  position: relative;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  background-color: #137E60;
}

#title {
  text-align: center;
  font-size: 24px;
  color: white;
}

#image {
  position: relative;
  top: 12%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
}

#image img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu {
  position: relative;
  top: 20%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
}

.menu div {
  display: flex;
  align-items: center;
}

.menu img {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.menu p {
  margin-left: 5px;
  color: white;
  font-size: 14px;
}

</style>
