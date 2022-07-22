import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import React from "react";
import {
  PaymentHeader,
  PaymentMethods,
  PaymentSectionContainer,
  PaymentTypeButton,
} from "./styles";

export default function PaymentSection() {
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
        <PaymentTypeButton isSelected={false}>
          <CreditCard size={22}></CreditCard>
          <span>Credit Card</span>
        </PaymentTypeButton>
        <PaymentTypeButton isSelected={false}>
          <Bank size={22}></Bank>
          <span>Debit Card</span>
        </PaymentTypeButton>
        <PaymentTypeButton isSelected={true}>
          <Money size={22}></Money>
          <span>Cash</span>
        </PaymentTypeButton>
      </PaymentMethods>
    </PaymentSectionContainer>
  );
}
