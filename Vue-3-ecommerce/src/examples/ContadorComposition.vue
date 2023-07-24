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
    <h1>Hola Soy la version con composition API</h1>
    <h1>Contador: {{ count }}</h1>

    <button @click="aumentar">
        Incrementar contador
    </button>
</template>