import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { paymentMethod } from "../../../../reducers/coffees/reducer";
import {
  PaymentHeader,
  PaymentMethods,
  PaymentSectionContainer,
  PaymentTypeButton,
} from "./styles";

export interface PaymentSectionProps {
  selectedPaymentMethod: paymentMethod;
  selectPaymentMethod: (selectedPaymentMethod: paymentMethod) => void;
}

export default function PaymentSection({
  selectedPaymentMethod,
  selectPaymentMethod,
}: PaymentSectionProps) {
  return (
    <PaymentSectionContainer>
      <PaymentHeader>
        <div>
          <CurrencyDollar size={22}></CurrencyDollar>
          <h1>Payment</h1>
        </div>
        <p>Payment is made on delivery. Choose the way you want to pay</p>
      </PaymentHeader>
      <PaymentMethods>
        <PaymentTypeButton
          type="button"
          onClick={() => selectPaymentMethod("credit")}
          isSelected={selectedPaymentMethod === "credit"}
        >
          <CreditCard size={22}></CreditCard>
          <span>Credit Card</span>
        </PaymentTypeButton>
        <PaymentTypeButton
          type="button"
          onClick={() => selectPaymentMethod("debit")}
          isSelected={selectedPaymentMethod === "debit"}
        >
          <Bank size={22}></Bank>
          <span>Debit Card</span>
        </PaymentTypeButton>
        <PaymentTypeButton
          type="button"
          onClick={() => selectPaymentMethod("cash")}
          isSelected={selectedPaymentMethod === "cash"}
        >
          <Money size={22}></Money>
          <span>Cash</span>
        </PaymentTypeButton>
      </PaymentMethods>
    </PaymentSectionContainer>
  );
}
