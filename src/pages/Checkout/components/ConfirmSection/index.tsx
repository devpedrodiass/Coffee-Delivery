import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import SelectedCoffeeList from "./components/SelectedCoffeeList";
import {
  ConfirmAmountSection,
  ConfirmButton,
  ConfirmSectionContainer,
  Divider,
} from "./styles";

export interface ConfirmSectionProps {
  isSubmitDisabled: boolean;
}

export default function ConfirmSection({
  isSubmitDisabled,
}: ConfirmSectionProps) {
  const { checkout } = useContext(CoffeeContext);

  const initialValue = 0;

  const subTotalItemsPrice =
    checkout.selectedCoffee.length === 0
      ? 0
      : checkout.selectedCoffee.reduce((previousState, currentState) => {
          return currentState.amount * currentState.price;
        }, initialValue);

  const randomDeliverPrice =
    checkout.selectedCoffee.length === 0
      ? 0
      : Math.floor(Math.random() * (10 - 1)) + 1;

  const totalPrice = subTotalItemsPrice + randomDeliverPrice;

  return (
    <ConfirmSectionContainer>
      <SelectedCoffeeList checkout={checkout}></SelectedCoffeeList>
      <Divider></Divider>
      <ConfirmAmountSection>
        <p>
          Subtotal Items
          <span>${subTotalItemsPrice.toFixed(2)}</span>
        </p>
        <p>
          Delivery
          <span>${randomDeliverPrice}</span>
        </p>
        <p>
          Total
          <span>${totalPrice}</span>
        </p>
      </ConfirmAmountSection>
      <ConfirmButton type="submit" disabled={isSubmitDisabled}>
        Confirm yor order
      </ConfirmButton>
    </ConfirmSectionContainer>
  );
}
