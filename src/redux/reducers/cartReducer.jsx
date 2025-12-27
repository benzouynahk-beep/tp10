// const initialState = {
//   items: []
// };

// export default function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         items: [...state.items, { ...action.payload, qty: 1 }]
//       };
//     default:
//       return state;
//   }
// }
// :::::::::::::::::::::::::::::
// const initialState = {
//   items: []
// };

// export default function cartReducer(state = initialState, action) {
//   switch (action.type) {

//     case "ADD_TO_CART": {
//       const exist = state.items.find(
//         item => item.id === action.payload.id
//       );

//       if (exist) {
//         return {
//           ...state,
//           items: state.items.map(item =>
//             item.id === exist.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         };
//       }

//       return {
//         ...state,
//         items: [
//           ...state.items,
//           { ...action.payload, quantity: 1 }
//         ]
//       };
//     }

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         items: state.items.filter(
//           item => item.id !== action.payload
//         )
//       };

//     default:
//       return state;
//   }
// }


const initialState = {
  items: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      const exist = state.items.find(i => i.id === action.payload.id);

      if (exist) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: 1 }
        ]
      };
    }

    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(1, i.quantity + action.payload.delta) }
            : i
        )
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };

    default:
      return state;
  }
}