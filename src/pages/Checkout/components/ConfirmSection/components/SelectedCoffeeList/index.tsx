import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../../../../../contexts/CoffeeContext";
import { Checkout } from "../../../../../../reducers/coffees/reducer";
import { Divider } from "../../styles";
import SelectedCoffeeItem from "../SelectedCoffeeItem";
import {
  EmptyListMessage,
  NavigateToHomeButton,
  SelectedCoffeeListContainer,
} from "./styles";

interface SelectedCoffeeListProps {
  checkout: Checkout;
}

export default function SelectedCoffeeList({
  checkout,
}: SelectedCoffeeListProps) {
  const { selectedCoffee } = checkout;
  return (
    <SelectedCoffeeListContainer>
      {selectedCoffee.map(({ amount, id, image, name, price }, index) => (
        <div key={id}>
          <SelectedCoffeeItem
            amount={amount}
            coffeeId={id}
            image={image}
            name={name}
            price={price}
          ></SelectedCoffeeItem>
          {selectedCoffee.length > index + 1 ? <Divider></Divider> : null}
        </div>
      ))}
      {selectedCoffee.length === 0 ? (
        <EmptyListMessage>
          Empty List! Add some coffee ☕
          <NavigateToHomeButton to={"/"}>Go to Home</NavigateToHomeButton>
        </EmptyListMessage>
      ) : null}
    </SelectedCoffeeListContainer>
  );
}
