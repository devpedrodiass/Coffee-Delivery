import SelectedCoffeeList from "./components/SelectedCoffeeList";
import {
  ConfirmAmountSection,
  ConfirmButton,
  ConfirmSectionContainer,
  Divider,
} from "./styles";

export default function ConfirmSection() {
  return (
    <ConfirmSectionContainer>
      <SelectedCoffeeList></SelectedCoffeeList>
      <Divider></Divider>
      <ConfirmAmountSection>
        <p>
          Subtotal Items
          <span>$29.70</span>
        </p>
        <p>
          Delivery
          <span>$3.50</span>
        </p>
        <p>
          Total
          <span>$33.20</span>
        </p>
      </ConfirmAmountSection>
      <ConfirmButton>Confirm yor order</ConfirmButton>
    </ConfirmSectionContainer>
  );
}
