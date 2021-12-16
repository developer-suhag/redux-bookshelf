function bookReducer(state, action) {
  //   if (action.type === "ADD_TO_READING_LIST") {
  //     const newState = [...state, action.payload];
  //     return newState;
  //   } else if (action.type === "REMOVE_FROM_READING_LIST") {
  //     const newState = action.filter((book) => book._id !== action.payload);
  //     return newState;
  //   }

  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = [...state, action.payload];
      return newState;
    }
    case "REMOVE_FROM_READING_LIST": {
      const newState = action.filter((book) => book._id !== action.payload);
      return newState;
    }
    default:
      return state;
  }
}

export default bookReducer;
