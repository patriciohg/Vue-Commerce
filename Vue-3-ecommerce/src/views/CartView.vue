<script lang="ts">

import  Cart  from "../components/Cart/ShoppingCart.vue";
import  SummaryCard  from "../components/Cart/SummaryCard.vue";
export default {
    components: {
        Cart,
        SummaryCard
    }
}
</script>
<template>
    <v-row>
        <v-col cols="12" md="8">
            <Cart/>
        </v-col>
        <v-col cols="12" md="8">
            <SummaryCard/>
        </v-col>
    </v-row>
    
</template>