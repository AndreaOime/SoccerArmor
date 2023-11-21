export const productsReducer = (state = [], action) => {
    switch (action.type) {
      case 'addProduct':
  
        return [
          ...state,
          {
            ...action.payload,
            id: new Date().getTime(),
          }
        ];
  
      case 'updateProduct':
  
        return state.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...action.payload,
              password: product.password
            };
          }
          return product;
        });
  
      case "loadingProducts":
        return action.payload;
  
      case 'removeProduct':
  
        return state.filter(product => product.id !== action.payload);
  
      default:
        return state;
    }
  }
  