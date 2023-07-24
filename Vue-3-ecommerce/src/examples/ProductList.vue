<script lang="ts">
import type { CartDetail, Product } from "./Types";
import ProductCard from "./ProductCard.vue";
import Cart from "./Cart.vue";

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

            ],
            details: <Array<CartDetail>>[]
        }
    },
    methods: {
        onAddProduct(productId: number){
            const detailFind = this.details.find(d => d.productId === productId);
            if(detailFind){
                detailFind.quantity++;
            }else{
                this.details.push({
                    productId,
                    quantity: 1
                });
            }
            
        }
    },

}

</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="product in products" cols="4">
                <ProductCard 
                    :product="product" 
                    v-on:addProduct="onAddProduct(product.id)"
                />
            </v-col>
        </v-row>

        <Cart :details="details"/>
    </v-container>
</template>