import { AmountTypeAction } from "../../contexts/CoffeeContext";
import { Coffee, DeliveryInformation } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE_TO_CHECKOUT = "ADD_NEW_COFFEE_TO_CHECKOUT",
  REMOVE_COFFEE_FROM_CHECKOUT = "REMOVE_COFFEE_FROM_CHECKOUT",
  ADD_OR_REMOVE_AMOUNT_FROM_SELECTED_COFFEE = "ADD_OR_REMOVE_AMOUNT_FROM_SELECTED_COFFEE",
  ADD_DELIVERY_INFORMATION = 'ADD_DELIVERY_INFORMATION'
}

export function addCoffeeToCheckoutAction(selectedCoffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_TO_CHECKOUT,
    payload: {
      selectedCoffee,
    },
  };
}
export function RemoveCoffeeFromCheckoutAction(selectedCoffeeId: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CHECKOUT,
    payload: {
      selectedCoffeeId,
    }
  };
}
export function addOrRemoveAmountFromSelectedCoffeeAction(type: AmountTypeAction, selectedCoffeeId: string) {
  return {
    type: ActionTypes.ADD_OR_REMOVE_AMOUNT_FROM_SELECTED_COFFEE,
    payload: {
      selectedCoffeeId,
      amountType: type
    }
  };
}
export function addDeliveryInformationAction(newDeliveryInformation: DeliveryInformation) {
  return {
    type: ActionTypes.ADD_DELIVERY_INFORMATION,
    payload: {
      newDeliveryInformation,
    }
  };
}

