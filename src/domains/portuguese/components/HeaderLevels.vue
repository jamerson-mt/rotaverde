<script setup lang="ts">
</script>

<template>
    <div class="header">
        <div class="img">
            <img src="img/homen.jpg" alt="person">
        </div>
        <div class="content">
            <h1>Meio Ambiente</h1>

        </div>

    </div>
</template>

<style scoped>
.header {
    position: relative;
    background-image: url("img/banner2.jpg");
    background-size: cover; /* Ajuste para cobrir toda a largura */
    background-repeat: no-repeat;
    background-position:  0px -40px; /* Ajuste para subir a imagem */
    top: 0;
    display: flex;
    background-color: #249b4c;
    color: #fff;
    padding: 10px;
    border-radius: 0 0 0px 0px;
    padding: 20px;
    height: 100px;
    align-items: center;
}

.img {
    display: inline-block;
    justify-content: center;
    margin-top: 0px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #D9D9D9;
    width: 4rem;
    height: 4rem;
    align-items: center;
}

img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.content {
    display: inline-block;
    margin-left: 10px;
    text-align: left;
    width: 45%;
}

h1 {
    font-size: 24px;
    color: #e6e6e6;
}

#bar1 {
    display: flex;
    margin-top: -4px;
    width: 7rem;
    height: 7px;
    background-color: #dbdbdb;
    border-radius: 20px;
}

#bar2 {
    position: relative;
    top: -7px;
    width: 2rem;
    height: 7px;
    background-color: #65D430;
    border-radius: 20px;
}

#p {
    font-size: 13px;
    margin-top: -2px;
    color: #222323;
    font-weight: bold;
}

.prata {
    width: 11%;
    margin: auto;
}

.buzina {
    width: 11%;
    margin: auto;
}
</style>