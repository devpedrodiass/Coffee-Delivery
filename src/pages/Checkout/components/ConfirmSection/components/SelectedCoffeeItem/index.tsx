import { Minus, Plus, Trash } from "phosphor-react";
import React from "react";
import {
  AmountButton,
  AmountCounter,
  AmountSelector,
} from "../../../../../Home/components/CoffeeCard/styles";
import {
  CoffeeActionButtons,
  CoffeeImage,
  CoffeeRemoveButton,
  CoffeeTextSection,
  SelectedCoffeeItemContainer,
} from "./styles";

export default function SelectedCoffeeItem() {
  return (
    <SelectedCoffeeItemContainer>
      <CoffeeImage src="/src/assets/CoffeeEx.svg"></CoffeeImage>
      <div>
        <CoffeeTextSection>
          <span>Traditional Express</span>
          <span>$9.90</span>
        </CoffeeTextSection>
        <CoffeeActionButtons>
          <AmountSelector>
            <AmountButton>
              <Minus size={14} weight="bold"></Minus>
            </AmountButton>
            <AmountCounter>3</AmountCounter>
            <AmountButton>
              <Plus size={14} weight="bold"></Plus>
            </AmountButton>
          </AmountSelector>
          <CoffeeRemoveButton>
            <Trash size={22}></Trash>
            Remove
          </CoffeeRemoveButton>
        </CoffeeActionButtons>
      </div>
    </SelectedCoffeeItemContainer>
  );
}
