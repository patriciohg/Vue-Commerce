<script lang="ts">
export default {
    data(){
        return {
            count: 0
        }
    },
    methods: {
        aumentarContador(){
            this.count++
        },
        disminuirContador(){
            this.count--
        }
    },
    mounted(){
        console.log('Contador montado')
    }
}
</script>

<template>
    <h1>Contador : {{ count }}</h1>
    <button @click="aumentarContador">
        Aumentar contador
    </button>
    <button @click="disminuirContador">
        Disminuir contador
    </button>
</template>