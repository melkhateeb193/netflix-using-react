const INTIAL_STATE ={
    moviesList :[] ,
} 

const ListReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "REMOVE_FROM_LIST":
      return state.filter((movie) => movie.id !== action.payload);
    case "ADD_TO_LIST":
      return [...state, action.payload];
       default:
      return state;
  }
};

export default ListReducer;
