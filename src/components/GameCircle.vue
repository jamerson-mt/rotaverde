<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
    cores: {
        type: Array,
        required: true
    }
});

const styleObject1 = ref({ opacity: 0.3 });
const styleObject2 = ref({ opacity: 0.3 });
const styleObject3 = ref({ opacity: 0.3 });
const styleObject4 = ref({ opacity: 0.3 });

const styleObjects = [styleObject1, styleObject2, styleObject3, styleObject4];
let previousCores = [];

const resetOpacity = () => {
    styleObjects.forEach(obj => {
        obj.value.opacity = 0.3;
    });
};

function applyStyleFunction(newCores: Array<any>) {
    return new Promise((resolve) => {
        const coresToApply = newCores.filter(cor => !previousCores.includes(cor));
        coresToApply.forEach((corIndex, i) => {
            setTimeout(() => {
                styleObjects[i].value.opacity = 1;
                console.log("Aplicando estilo:", styleObjects[i].value.id);
                if (i === coresToApply.length - 1) {
                    setTimeout(() => {
                        resetOpacity();
                        resolve();
                    }, 1000);
                }
            }, i * 1000);
        });

        
        if (previousCores.length > 0) {
            previousCores = [...newCores]; 
        }
    });
}

onMounted(async () => {
    while (true) {
        await applyStyleFunction(props.cores);
    }
});

</script>

<template>
   <div id="circle">
        <div id="circleCenter"></div>
        <div>
            <div id="circle1" :style="styleObject1"></div>
            <div id="circle2" :style="styleObject2"></div>
            <div id="circle3" :style="styleObject3"></div>
            <div id="circle4" :style="styleObject4"></div>
        </div>
    </div> 
</template>

<style scoped>
#circle {
    display: flex;
    width: 20rem;
    height: 20rem;
    background: #4d4c4c;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
}

#circleCenter {
    position: absolute;
    width: 4rem;
    height: 4rem;
    background: #fff;
    border-radius: 50%;
    margin: 5rem;
}

#circle1 {
    position: relative;
    width: 14rem;
    top: 4.5rem;
    height: 7rem;
    background: blue;
    border-radius: 50% 50% 10px 10px;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
    opacity: 0.3;
}

#circle2 {
    position: relative;
    width: 14rem;
    height: 7rem;
    right: -5.8rem;
    top: 3.5rem;
    background: red;
    border-radius: 50% 50% 10px 10px;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
    transform: rotate(90deg);
    opacity: 0.3;
}

#circle3 {
    position: relative;
    width: 14rem;
    height: 7rem;
    top: 2.4rem;
    background: green;
    border-radius: 50% 50% 10px 10px;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
    transform: rotate(180deg);
    opacity: 0.3;
}

#circle4 {
    position: relative;
    width: 14rem;
    height: 7rem;
    left: -5.8rem;
    top: -10.5rem;
    background: orange;
    border-radius: 50% 50% 10px 10px;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
    transform: rotate(270deg);
    opacity: 0.3;
}
</style>
