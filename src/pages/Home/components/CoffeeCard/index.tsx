import React from "react";
import {
  Actions,
  AmountCounter,
  AmountSelector,
  CartButton,
  Categories,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
  AmountButton,
} from "./styles";

import coffeEx from "../../../../assets/CoffeeEx.svg";
import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeEx} alt="" />
      <Categories>Tradicional</Categories>
      <CoffeeName>Tradicional Express</CoffeeName>
      <CoffeeDescription>
        Traditional coffee made with hot water and ground beans
      </CoffeeDescription>
      <Actions>
        <CoffeePrice>
          <span>R$</span> 9,90
        </CoffeePrice>
        <AmountSelector>
          <AmountButton>-</AmountButton>
          <AmountCounter>3</AmountCounter>
          <AmountButton>+</AmountButton>
        </AmountSelector>
        <CartButton>
          <ShoppingCart size={22}></ShoppingCart>
        </CartButton>
      </Actions>
    </CoffeeCardContainer>
  );
}
