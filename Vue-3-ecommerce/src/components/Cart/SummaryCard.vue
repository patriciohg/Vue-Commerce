<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default{
    computed:{
        ...mapState(useCartStore, ['totalAmount'])
    }
}


</script>
<template>
    <v-card>
        <v-card-title>
            Resumen de la compra
        </v-card-title>
        <v-card-subtitle>
            Total a pagar : $ {{ totalAmount }}            
        </v-card-subtitle>
        <v-card-text>
            <v-btn variant="tonal" color="orange-lighten-2">
                Realizar Pedido
            </v-btn>
        </v-card-text>
    </v-card>
</template>