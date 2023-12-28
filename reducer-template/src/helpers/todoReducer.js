export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case `[TODO] Add Todo`:
      return [...initialState, action.payload];
    case "[TODO] Remove Todo": {
      return initialState.filter((state) => action.payload != state.id);
    }
    case "[TODO] Done Todo": {
      return initialState.map((state) => {
        if (state.id === action.payload) {
          console.log({
            ...state,
            done: !state.done,
          });
          return {
            ...state,
            done: !state.done,
          };
        }
        return state;
      });
    }
    default:
      return initialState;
  }
};
