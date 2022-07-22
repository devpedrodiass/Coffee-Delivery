import { AmountTypeAction } from './../../contexts/CoffeeContext';
import produce from "immer";
import { ActionTypes } from "./actions";

export type paymentMethod = 'credit' | 'debit' | 'cash' | 'none'

export interface DeliveryInformation {
  postalCode: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
  paymentMethod: paymentMethod
}

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  categories: string[]
}

export interface Checkout {
  selectedCoffee: Coffee[];
  deliveryInformation: DeliveryInformation
}

interface CoffeeState {
  coffees: Coffee[];
  checkout: Checkout;
}

export interface PayloadContent {
  selectedCoffee?: Coffee;
  selectedCoffeeId?: string
  amountType?: AmountTypeAction
}

export interface ActionType {
  type: ActionTypes;
  payload: PayloadContent
}

export function coffeeReducer(state: CoffeeState, action: ActionType) {
  console.log('entrou reducer')
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_TO_CHECKOUT: {
      if (!action.payload.selectedCoffee) {
        return state
      }
      return produce(state, (draft) => {
        let selectedCoffeeIndex;
        const alreadyExistsOnList = state.checkout.selectedCoffee.some(coffee => coffee.id === action.payload.selectedCoffee?.id)
        if (
          alreadyExistsOnList
        ) {
          selectedCoffeeIndex = state.checkout.selectedCoffee.findIndex(coffee => coffee.id === action.payload.selectedCoffee?.id)
          draft.checkout.selectedCoffee[selectedCoffeeIndex].amount = draft.checkout.selectedCoffee[selectedCoffeeIndex].amount + 1
        } else {
          draft.checkout.selectedCoffee.push(action.payload.selectedCoffee ?? {} as Coffee);
        }
        console.log(alreadyExistsOnList)
        console.log(selectedCoffeeIndex)

      });
    }
    case ActionTypes.REMOVE_COFFEE_FROM_CHECKOUT:
      if (!action.payload.selectedCoffeeId) {
        return state
      }
      const selectedCoffeeIndexForRemove = state.checkout.selectedCoffee.findIndex(coffee => coffee.id === action.payload.selectedCoffeeId)
      return produce(state, (draft) => {
        draft.checkout.selectedCoffee.splice(selectedCoffeeIndexForRemove, 1);
      });
    case ActionTypes.ADD_OR_REMOVE_AMOUNT_FROM_SELECTED_COFFEE:
      if (!action.payload.selectedCoffeeId) {
        return state
      }
      const selectedCoffeeIndexForAmount = state.checkout.selectedCoffee.findIndex(coffee => coffee.id === action.payload.selectedCoffeeId)

      if (action.payload.amountType === 'ADD') {
        return produce(state, (draft) => {
          draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount = draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount + 1;
        });

      } else if (action.payload.amountType === 'REMOVE') {

        return produce(state, (draft) => {
          draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount = draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount - 1;
        });
      }

    default:
      return state;
  }
}