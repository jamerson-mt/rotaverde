<script setup lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import Painel from "../../../components/painels/Painel.vue";

const falar = () => {
  console.log("falando");
};
let verificar = "";
const pintar = (v) => {
  if(verificar !="" && v==verificar){
    document.querySelectorAll("." + verificar).forEach(function (op) {
      op.setAttribute("style", "background-color:#efefef;");
    });
    verificar="";
  }else if(verificar !="" && v!=verificar){
    document.querySelectorAll("." + verificar).forEach(function (op) {
      op.setAttribute("style", "background-color:#efefef;");
    });
    document.querySelectorAll("." + v).forEach(function (op) {
      op.setAttribute("style", "background-color:yellow;");
    });
    verificar=v;
  }else if (verificar == v) {
    console.log("validando e proxima fase se certo se errado pinta de vermelho");
  } else {
    document.querySelectorAll("." + v).forEach(function (op) {
      op.setAttribute("style", "background-color:yellow;");
    });
    console.log(v);
    verificar=v;
  }
};
const responder = () => {
  document.querySelectorAll(".form").forEach(function (op) {
    op.setAttribute("style", "opacity:0;top:1200px;z-index:0;");
  });
};
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header">
        <p>Silabário das dificuldades</p>
      </div>
      <div class="container">
        <div class="linha">
          <Painel @click="pintar('qua')" valor="qua" />
          <Painel @click="pintar('que')" valor="que" />
          <Painel @click="pintar('qui')" valor="qui" />
          <Painel @click="pintar('-')" valor="-" />
          <Painel @click="pintar('-')" valor="-" />
        </div>
        <div class="linha">
          <Painel @click="pintar('bra')" valor="bra" />
          <Painel @click="pintar('bre')" valor="bre" />
          <Painel @click="pintar('bri')" valor="bri" />
          <Painel @click="pintar('bro')" valor="bro" />
          <Painel @click="pintar('bru')" valor="bru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('cra')" valor="cra" />
          <Painel @click="pintar('cre')" valor="cre" />
          <Painel @click="pintar('cri')" valor="cri" />
          <Painel @click="pintar('cro')" valor="cro" />
          <Painel @click="pintar('cru')" valor="cru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('dra')" valor="dra" />
          <Painel @click="pintar('dre')" valor="dre" />
          <Painel @click="pintar('dri')" valor="dri" />
          <Painel @click="pintar('dro')" valor="dro" />
          <Painel @click="pintar('dru')" valor="dru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('fra')" valor="fra" />
          <Painel @click="pintar('fre')" valor="fre" />
          <Painel @click="pintar('fri')" valor="fri" />
          <Painel @click="pintar('fro')" valor="fro" />
          <Painel @click="pintar('fru')" valor="fru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('gra')" valor="gra" />
          <Painel @click="pintar('gre')" valor="gre" />
          <Painel @click="pintar('gri')" valor="gri" />
          <Painel @click="pintar('gro')" valor="gro" />
          <Painel @click="pintar('gru')" valor="gru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('pra')" valor="pra" />
          <Painel @click="pintar('pre')" valor="pre" />
          <Painel @click="pintar('pri')" valor="pri" />
          <Painel @click="pintar('pro')" valor="pro" />
          <Painel @click="pintar('pru')" valor="pru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('tra')" valor="tra" />
          <Painel @click="pintar('tre')" valor="tre" />
          <Painel @click="pintar('tri')" valor="tri" />
          <Painel @click="pintar('tro')" valor="tro" />
          <Painel @click="pintar('tru')" valor="tru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('vra')" valor="vra" />
          <Painel @click="pintar('vre')" valor="vre" />
          <Painel @click="pintar('vri')" valor="vri" />
          <Painel @click="pintar('vro')" valor="vro" />
          <Painel @click="pintar('vru')" valor="vru" />
        </div>
        <div class="linha">
          <Painel @click="pintar('bla')" valor="bla" />
          <Painel @click="pintar('ble')" valor="ble" />
          <Painel @click="pintar('bli')" valor="bli" />
          <Painel @click="pintar('blo')" valor="blo" />
          <Painel @click="pintar('blu')" valor="blu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('cla')" valor="cla" />
          <Painel @click="pintar('cle')" valor="cle" />
          <Painel @click="pintar('cli')" valor="cli" />
          <Painel @click="pintar('clo')" valor="clo" />
          <Painel @click="pintar('clu')" valor="clu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('fla')" valor="fla" />
          <Painel @click="pintar('fle')" valor="fle" />
          <Painel @click="pintar('fli')" valor="fli" />
          <Painel @click="pintar('flo')" valor="flo" />
          <Painel @click="pintar('flu')" valor="flu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('gla')" valor="gla" />
          <Painel @click="pintar('gle')" valor="gle" />
          <Painel @click="pintar('gli')" valor="gli" />
          <Painel @click="pintar('glo')" valor="glo" />
          <Painel @click="pintar('glu')" valor="glu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('pla')" valor="pla" />
          <Painel @click="pintar('ple')" valor="ple" />
          <Painel @click="pintar('pli')" valor="pli" />
          <Painel @click="pintar('plo')" valor="plo" />
          <Painel @click="pintar('plu')" valor="plu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('tla')" valor="tla" />
          <Painel @click="pintar('tle')" valor="tle" />
          <Painel @click="pintar('tli')" valor="tli" />
          <Painel @click="pintar('tlo')" valor="tlo" />
          <Painel @click="pintar('tlu')" valor="tlu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('vla')" valor="vla" />
          <Painel @click="pintar('vle')" valor="vle" />
          <Painel @click="pintar('vli')" valor="vli" />
          <Painel @click="pintar('vlo')" valor="vlo" />
          <Painel @click="pintar('vlu')" valor="vlu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('cha')" valor="cha" />
          <Painel @click="pintar('che')" valor="che" />
          <Painel @click="pintar('chi')" valor="chi" />
          <Painel @click="pintar('cho')" valor="cho" />
          <Painel @click="pintar('chu')" valor="chu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('nha')" valor="nha" />
          <Painel @click="pintar('nhe')" valor="nhe" />
          <Painel @click="pintar('nhi')" valor="nhi" />
          <Painel @click="pintar('nho')" valor="nho" />
          <Painel @click="pintar('nhu')" valor="nhu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('lha')" valor="lha" />
          <Painel @click="pintar('lhe')" valor="lhe" />
          <Painel @click="pintar('lhi')" valor="lhi" />
          <Painel @click="pintar('lho')" valor="lho" />
          <Painel @click="pintar('lhu')" valor="lhu" />
        </div>
        <div class="linha">
          <Painel @click="pintar('gua')" valor="gua" />
          <Painel @click="pintar('gue')" valor="gue" />
          <Painel @click="pintar('gui')" valor="gui" />
          <Painel @click="pintar('-')" valor="-" />
          <Painel @click="pintar('-')" valor="-" />
        </div>
        <div class="linha">
          <Painel @click="pintar('an')" valor="an" />
          <Painel @click="pintar('en')" valor="en" />
          <Painel @click="pintar('in')" valor="in" />
          <Painel @click="pintar('on')" valor="on" />
          <Painel @click="pintar('un')" valor="un" />
        </div>
        <div class="linha">
          <Painel @click="pintar('ar')" valor="ar" />
          <Painel @click="pintar('er')" valor="er" />
          <Painel @click="pintar('ir')" valor="ir" />
          <Painel @click="pintar('or')" valor="or" />
          <Painel @click="pintar('ur')" valor="ur" />
        </div>
        <div class="linha">
          <Painel @click="pintar('as')" valor="as" />
          <Painel @click="pintar('es')" valor="es" />
          <Painel @click="pintar('is')" valor="is" />
          <Painel @click="pintar('os')" valor="os" />
          <Painel @click="pintar('us')" valor="us" />
        </div>
        <div class="linha">
          <Painel @click="pintar('ans')" valor="ans" />
          <Painel @click="pintar('ens')" valor="ens" />
          <Painel @click="pintar('ins')" valor="ins" />
          <Painel @click="pintar('ons')" valor="ons" />
          <Painel @click="pintar('uns')" valor="uns" />
        </div>
        <div class="linha">
          <Painel @click="pintar('am')" valor="am" />
          <Painel @click="pintar('em')" valor="em" />
          <Painel @click="pintar('im')" valor="im" />
          <Painel @click="pintar('om')" valor="om" />
          <Painel @click="pintar('um')" valor="um" />
        </div>
      </div>
      <div class="form">
        <div class="img">
          <img
            @click="falar"
            src="../../../../public/img/items/aquario2.jpg"
            alt="aquario"
          />
        </div>
        <button id="button" @click="responder"><p>responder</p></button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.header {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  height: 120px;
  background-color: #353030;
}
p {
  color: white;
  font-size: 26px;
  width: 80%;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-style: bold;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 150px;
}
.linha {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.form {
  margin-left: 5%;
  display: flex;
  position: absolute;

  top: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #353030e0;
  border-radius: 5px;
  height: 250px;
  width: 90%;
}
.img {
  position: relative;
  height: 120px;
  width: 120px;
  overflow: auto;
}
img {
  position: relative;
  height: 100%;
  width: 100%;
}
button {
  background-color: #ffb636;
  height: 60px;
  width: 160px;
  border-radius: 5px;
  color: white;
}
button > p {
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  font-style: bold;
}
</style>
