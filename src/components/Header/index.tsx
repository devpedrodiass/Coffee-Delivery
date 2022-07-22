import { MapPin, ShoppingCart } from "phosphor-react";
import React, { useContext } from "react";
import {
  CheckoutButton,
  HeaderContainer,
  LocaleButton,
  NotificationCounter,
} from "./styles";

import CoffeeLogo from "../../assets/coffeeLogo.svg";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export default function Header() {
  const { checkout } = useContext(CoffeeContext);

  const amountOfSelectedCoffees = checkout.selectedCoffee.length;
  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="Coffee Delivery Logo" />
      <LocaleButton>
        <MapPin size={22} weight="fill"></MapPin>
        Lisbon, Portugal
      </LocaleButton>
      <CheckoutButton to={"/checkout"}>
        <ShoppingCart size={22} weight="fill"></ShoppingCart>
        <NotificationCounter>{amountOfSelectedCoffees}</NotificationCounter>
      </CheckoutButton>
    </HeaderContainer>
  );
}
