import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/Types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: [] as CartDetail[]
  }),
  getters: {
    cartItemsCount(state): number {
        let count = 0;
        state.details.forEach(d => count += d.quantity);
        return count;
    },
    totalAmount : (state) => {
      let total = 0;
      state.details.forEach(d => {
        total += d.product.price * d.quantity
      });
      return total;
    }    
  },
  actions: {
    addProduct(product: Product) {
        const detailFound = this.details.find(d => d.product.id === product.id);

        if(detailFound){

            detailFound.quantity++;

        }else{
            this.details.push({
               product,
                quantity: 1
            });

        }
    },
    removeProduct(productId: number) {
        const productIndex = this.details.findIndex(d => d.product.id === productId);
        this.details.splice(productIndex, 1);
        
    },        
    increment(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);
      if(detailFound){
        detailFound.quantity++;
      }
    },
    decrement(productId: number){
      const detailFound = this.details.find(d => d.product.id === productId);
      if(detailFound){
        detailFound.quantity--;
        if(detailFound.quantity === 0){
          this.removeProduct(productId);
        }
      }
    }      
  }
})
