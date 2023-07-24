<script lang="ts">
    import type { PropType } from "vue";
    import type { Product } from "./Types";
    export default {
        props: {
            product : {
                type : Object as PropType<Product>,
                required: true
            }
        },
        emits: ['addProduct'],
        methods: {
            onAddButtonClick(){
                this.$emit('addProduct');
            }
        }


    }

</script>

<template>
    <v-card>
        <v-img :src="product.image" height="200px">
        </v-img>

        <v-card-title>            
            {{ product.name }}
            
        </v-card-title>

        <v-card-text>
            <p class="mb-4"> 
                Esta es una descripcion de ejemplo.
            </p>
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="onAddButtonClick" color="orange-lighten-2">
                Agregar al carrito
            </v-btn>
        </v-card-actions>

    </v-card>    
    <hr/>
</template>