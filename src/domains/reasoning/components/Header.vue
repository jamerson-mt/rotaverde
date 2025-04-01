<script setup>
</script>

<template>
  <!-- <ion-header class="rounded-b-3xl border-solid border-black" id="container"> -->
  <div class="toolbar">
    <h3 id="title">Rota verde</h3>
    <div id="image" class="w-16 left-5">
      <img src="img/person.jpg" alt="pessoa" />
    </div>
  </div>
  <!-- </ion-header> -->
</template>

<style scoped>
.toolbar {
  display: flex;
  background-image: url("img/banner2.jpg");
  background-size: cover;
  /* Ajuste para cobrir toda a largura */
  background-repeat: no-repeat;
  background-position: 0px -40px;
  /* Ajuste para subir a imagem */
  position: relative;
  top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: #249b4c;
}

#title {
  text-align: center;
  font-size: 24px;
  color: white;
}


#image {
  border-radius: 50px;

  width: 4rem;
  position: absolute;
}
img{
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.p {
  margin-top: 5px;
  font-size: 14px;
}
</style>
