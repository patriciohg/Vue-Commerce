<script lang="ts">
import type { Category } from '@/model/Types';

export default{
    data(){
        return{
            categories: [
                {
                    id: 1,
                    name: "Oficina",
                    description: "Articulos para tu oficina"

                },
                {
                    id: 2,
                    name: "Computador",
                    description: "Articulos para tu computador"                
                },
                {
                    id: 3,
                    name: "Casa",
                    description: "Articulos para tu casa"
                }
            ] as Category[]
        }
    },
    methods:{
        selectCategory(category: Category){
            console.log(category);
        }
    }


}
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
            v-for="category in categories"
            :key="category.id"
            link
            @click="selectCategory(category)"
            >
            <v-list-item-title>
                {{ category.name }}
            </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
            link
            color="grey-lighten-4"
            >
            <v-list-item-title>
                Order By Price
            </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>