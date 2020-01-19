import { Action } from '@ngrx/store';
import { ShoppingItem } from '../shared/shopping-item';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    DELETE_All_ITEM = '[SHOPPING] Delete All Item',
    UPDATE_ITEM = '[SHOPPING] Update Item'
}

// Add
export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem) { }
}
// Delete Single
export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM;
    constructor(public payload: string) { }
}
// Delete All
export class DeleteAllItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_All_ITEM;
    constructor() { }
}
// Update
export class UpdateItemAction implements Action {
    readonly type = ShoppingActionTypes.UPDATE_ITEM;
    constructor(public payload: ShoppingItem) { }
}

export type ShoppingAction =
    AddItemAction |
    DeleteItemAction |
    DeleteAllItemAction |
    UpdateItemAction;
