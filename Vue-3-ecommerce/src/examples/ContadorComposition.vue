<script setup lang ="ts">
    import { onMounted, ref } from 'vue'

    const count = ref(0);

    function aumentar(){
        count.value++
    }
    onMounted(()=>{
        console.log('Contador montado');
    });
</script>

<template>
    <p>Objetivo: Tienes que llegar a 20 clicks </p>
    <h1>Contador: {{ count }}</h1>

    <button @click="aumentar">
        Incrementar contador
    </button>
    <p v-if="count <=10">Vamos tu puedes.</p>
    <p v-else>Ya te falta muy poco.</p>
</template>