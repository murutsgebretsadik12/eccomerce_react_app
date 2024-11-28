import { useReducer} from 'react';
import {Type} from './action.type';


export const initialState ={
    basket:[],
    user:null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            // Check if the item exists
            const existingItem = state.basket.find(
                (item) => item.id === action.item.id
            );
            if (!existingItem) {
                return {
                    ...state,
                    basket: [
                        ...state.basket,
                        { ...action.item, amount: 1 },
                    ],
                };
            } else {
                const updatedBasket = state.basket.map((item) =>
                    item.id === action.item.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );

                return {
                    ...state,
                    basket: updatedBasket,
                };
            }

            case Type.SET_USER:
                 return {
                  ...state,
                  user: action.user,
                 };

        default:
            return state;
    }
};
// Const [state, dispatch] = useReducer(reducer,initialState)





