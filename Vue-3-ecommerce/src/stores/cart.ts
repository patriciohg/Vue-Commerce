import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/Types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: <Array<CartDetail>>[]
  }),
  getters: {
    cartItemsCount(): number {
        let count = 0;
        this.details.forEach(d => count += d.quantity);
        return count;
    }
  },
  actions: {
    addProduct(productId: number) {
        const detailFound = this.details.find(d => d.productId === productId);

        if(detailFound){

            detailFound.quantity++;

        }else{
            this.details.push({
                productId,
                quantity: 1
            });

        }
    }
      
  }
})
