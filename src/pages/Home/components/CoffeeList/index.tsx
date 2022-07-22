import React, { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { CoffeeCard } from "../CoffeeCard";
import {
  CoffeeCardListSection,
  CoffeeListContainer,
  CoffeeListTitle,
} from "./styles";

export function CoffeeList() {
  const { coffees } = useContext(CoffeeContext);
  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Our Coffees</CoffeeListTitle>
      <CoffeeCardListSection>
        {coffees.map(({ amount, categories, description, id, name, price }) => (
          <CoffeeCard
            key={id}
            amount={amount}
            categories={categories}
            description={description}
            coffeeId={id}
            name={name}
            price={price}
          ></CoffeeCard>
        ))}
      </CoffeeCardListSection>
    </CoffeeListContainer>
  );
}
