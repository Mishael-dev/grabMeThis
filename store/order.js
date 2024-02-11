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
  getTotalPrice: () => {
    const totalPrice = OrderStore.getState().items.reduce((sum, item) => {
      return sum + (item.price || 0) * (item.number || 1);
    }, 0);

    return totalPrice + 200;
  },
  checkFields: () => {
    const state = OrderStore.getState();

    if (state.location.building && state.location.room) {
      for (const item of state.items) {
        if (!item.name || !item.price || !item.number) {
          return `Hey, ${Object.keys(item).find(
            (key) => !item[key]
          )} is incomplete.`;
        }
      }
      return null; // All fields are filled
    } else {
      return "Location is incomplete.";
    }
  },
}));

export default OrderStore;
