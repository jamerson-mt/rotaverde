<script setup lang="ts">

</script>

<template>
    <div id="content">
        <div id="circle">
            <div id="circleCenter"></div>
            <div>
                <div id="circle1"></div>
                <div id="circle2"></div>
                <div id="circle3"></div>
                <div id="circle4"></div>
            </div>
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
    opacity: 100;
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
    opacity: 100;
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
    opacity: 100;
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
    opacity: 100;
}

</style>