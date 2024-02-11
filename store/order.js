import { create } from "zustand";

const OrderStore = create((set) => ({
  items: [],
  location: {},
  addItem: (newItem) => {
    set((state) => ({
      items: [
        ...state.items,
        { name: newItem.name, price: newItem.price, number: newItem.number },
      ],
    }));
  },
  setLocation: (location) => {
    set((state) => ({
      location,
    }));
  },
}));

export default OrderStore;
