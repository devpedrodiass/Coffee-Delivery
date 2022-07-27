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
  image: string;
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
  newDeliveryInformation?: DeliveryInformation
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
          if (action.payload.selectedCoffee?.amount) {
            draft.checkout.selectedCoffee[selectedCoffeeIndex].amount = draft.checkout.selectedCoffee[selectedCoffeeIndex].amount + action.payload.selectedCoffee?.amount
          }
        } else {
          draft.checkout.selectedCoffee.push(action.payload.selectedCoffee ?? {} as Coffee);
        }

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
      console.log('Entrou')
      if (!action.payload.selectedCoffeeId) {
        return state
      }

      const selectedCoffeeIndexForAmount = state.checkout.selectedCoffee.findIndex(coffee => coffee.id === action.payload.selectedCoffeeId)

      console.log('Index: ', selectedCoffeeIndexForAmount)
      console.log('Type: ', action.payload.amountType)
      if (action.payload.amountType === 'ADD') {
        console.log('Add')
        return produce(state, (draft) => {
          draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount = draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount + 1;
        });

      } else if (action.payload.amountType === 'REMOVE') {
        console.log('Remove')

        return produce(state, (draft) => {
          draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount = draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount === 0 ? 0 : draft.checkout.selectedCoffee[selectedCoffeeIndexForAmount].amount - 1;
        });
      }

    case ActionTypes.ADD_DELIVERY_INFORMATION: {
      if (!action.payload.newDeliveryInformation) {
        return state
      }
      return produce(state, (draft) => {
        if (action.payload.newDeliveryInformation)
          draft.checkout.deliveryInformation = action.payload.newDeliveryInformation
      })
    }

    default:
      return state;
  }
}