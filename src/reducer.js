export const initialState = {
  basket: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // the item must one time in basket
      if (state.basket.filter((item) => item.id === action.item.id).length > 0)
        return state;

      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const basket = state.basket.filter((item) => {
        return item.id !== action.item.id;
      });
      return { ...state, basket };
    default:
      return state;
  }
};

export default reducer;
