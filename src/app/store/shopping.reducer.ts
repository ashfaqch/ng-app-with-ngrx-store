import { ShoppingActionTypes, ShoppingAction } from './shopping.actions';
import { ShoppingItem } from '../shared/shopping-item';

const initialState: ShoppingItem[] = [];

export function ShoppingReducer(state: ShoppingItem[] = initialState, action: ShoppingAction) {
    switch (action.type) {
        // Add
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        // Delete Single
        case ShoppingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        // Delete All
        case ShoppingActionTypes.DELETE_All_ITEM:
            return [];
        // Update
        case ShoppingActionTypes.UPDATE_ITEM:
            state.map(newsItem => {
                if (newsItem.id === action.payload.id) {
                    return [newsItem, action.payload];
                }
            });
            return state;
        default:
            return state;
    }
}
