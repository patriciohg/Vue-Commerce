<script lang="ts">
import { useCartStore } from '@/stores/cart';
import type { CartDetail } from '@/model/Types';    
import type { PropType } from 'vue';
import { mapActions } from 'pinia';

export default{
    props:{
        detail:{
            type: Object as PropType<CartDetail>,
            required: true
        }
    },
    methods: {
        ...mapActions(useCartStore, {
            decrementQuantity: 'decrement',
            incrementQuantity: 'increment',
            deleteProduct: 'removeProduct'
        }),
    },
    computed: {
        Subtotal(){
            return this.detail.product.price * this.detail.quantity;
        }
    }
}
</script>

<template>
    <tr>
        <td class="text-center">
            <v-avatar size="40px">
                <v-img :src="detail.product.image" height="100px"/>
            </v-avatar>
            {{ detail.product.name }}
        </td>
        <td class="text-center">
            <v-btn 
                @click="decrementQuantity(detail.product.id)" 
                class="ml-2"
                icon="mdi-minus"
                size="x-small"
            />
            {{ detail.quantity }}
            <v-btn 
                @click="incrementQuantity(detail.product.id)" 
                icon="mdi-plus"
                size="x-small"
            />
        </td>
        <td class="text-center">
            {{ Subtotal }}
        </td>
        <td class="text-center">{{ detail.product.price * detail.quantity }}</td>
        <td class="text-center">
            <v-btn 
                @click="deleteProduct(detail.product.id)" 
                class="ml-2"
                icon="mdi-delete"
                size="small"
            />
        </td>
    </tr> 

</template>
