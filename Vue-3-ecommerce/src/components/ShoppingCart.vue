<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default{
    methods: {
        decrementQuantity(productId: number) {
            this.cartStore.decrement(productId);
        },
        incrementQuantity(productId: number) {
            this.cartStore.increment(productId);
        },
        deleteProduct(productId: number) {
            this.cartStore.removeProduct(productId);
        }
    },
    computed: {
        cartStore() {
            return useCartStore();
        },
        details() {
            return this.cartStore.details;
        }
    }
}

</script>
<template>
    <v-card>
        <v-card-title>
            Productos agregados al carrito:
        </v-card-title>
        <v-card-text>            
            <v-list v-if="details.length > 0">
                <v-list-item v-for="detail in details" :key="detail.productId">
                    <v-list-item-title>
                        Product {{ detail.productId }}
                        <v-btn 
                            @click="decrementQuantity(detail.productId)" 
                            class="ml-2"
                            icon="mdi-minus"
                            size="x-small"
                        />
                        Cantidad: {{ detail.quantity }}
                        <v-btn 
                            @click="incrementQuantity(detail.productId)" 
                            icon="mdi-plus"
                            size="x-small"
                        />                        
                        <v-btn 
                            @click="deleteProduct(detail.productId)" 
                            class="ml-2"
                            icon="mdi-delete"
                            size="small"
                        />
                    </v-list-item-title>
                </v-list-item>

            </v-list>
            <p v-else>
                No hay productos en el carrito
                Haz  <RouterLink to="/">click aquí</RouterLink> para ver los productos disponibles.
            </p>
        </v-card-text>
        
    </v-card>
    
</template>