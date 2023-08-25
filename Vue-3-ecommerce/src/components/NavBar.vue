<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    export default{
        computed:{
            itemsCount(){
                const cartStore = useCartStore();
                return cartStore.cartItemsCount;
            }
        }

    }
</script>
<template>
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">

        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>
        
        <RouterLink to="/" v-slot="{navigate}">
          <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home'" variant="text" @click="navigate" size="small">
            Home
          </v-btn>
        </RouterLink>
        <RouterLink to="/cart" v-slot="{navigate}">
          <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="orange-lighten-2">
            <v-btn prepend-icon="mdi-cart" variant="text" :active="$route.name === 'cart'" @click="navigate" size="small">
              Cart
            </v-btn>
          </v-badge>
          
        </RouterLink>
        <RouterLink to="/about" v-slot="{navigate}">
          <v-btn prepend-icon="mdi-information" variant="text" :active="$route.name === 'about'" @click="navigate" size="small">
            About
          </v-btn>
        </RouterLink>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>

        </v-responsive>

      </v-container>

    </v-app-bar>
</template>