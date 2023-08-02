<script lang="ts">
import type { CartDetail, Product } from "../model/Types";
import ProductCard from "./ProductCard.vue";
import Cart from "./Cart.vue";
import { useCartStore } from "@/stores/cart";


export default {
    components: {
        ProductCard,
        Cart
    },
    data(){
        return{
            products: <Array<Product>>[
                {name: "Silla", price: 50, id: 1},
                {name: "Monitor", price: 100, id: 2},
                {name: "Microfono", price: 75, id: 3},
                {name: "Mouse", price: 25, id: 4},
                {name: "Teclado", price: 30, id: 5},
                {name: "Laptop", price: 500, id: 6},
                {name: "Audifonos", price: 50, id: 7},
                {name: "Camara", price: 200, id: 8},
                {name: "Lampara", price: 20, id: 9},
                {name: "Mesa", price: 100, id: 10}           

            ]
        }
    },
    methods: {
        onAddProduct(productId: number){
            
        }
    },

}

</script>

<template>
    
        <v-row>
            <v-col v-for="product in products" cols="4">
                <ProductCard 
                    :product="product" 
                />
            </v-col>
        </v-row>
    
</template>