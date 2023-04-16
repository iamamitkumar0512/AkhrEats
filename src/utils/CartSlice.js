import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let data = action.payload?.card?.info;
      data["quantity"] = 1;
      state.items.push(data);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeCart: (state, action) => {},
    increaseQuantity: (state, action) => {
      let data = JSON.parse(JSON.stringify(state)).items;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
       if (data[i].id === action.payload) {
        data[i].quantity +=1
       }
      }
      console.log(data);
      state.items = data;
    },
    decreseQuantity: (state, action) => {
      let data = JSON.parse(JSON.stringify(state)).items;
      let dataId = null;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === action.payload) {
          data[i].quantity -= 1
        }
        if (data[i].quantity === 0) {
          dataId = data[i].id  
        }
      }
      if (dataId !== null) {
        data = data.filter((item) => item.id !== dataId);
      }
      state.items = data;
    }
  },
});

export const { addItem, clearCart, removeCart, increaseQuantity, decreseQuantity } = CartSlice.actions;

export default CartSlice.reducer;
