import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  AmountTypeAction,
  CoffeeContext,
} from "../../../../../../contexts/CoffeeContext";
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

export interface SelectedCoffeeItemProps {
  coffeeId: string;
  name: string;
  price: number;
  amount: number;
  image: string;
}

export default function SelectedCoffeeItem({
  amount,
  image,
  name,
  coffeeId,
  price,
}: SelectedCoffeeItemProps) {
  const { removeCoffeeFromCheckout, addOrRemoveAmountFromSelectedCoffee } =
    useContext(CoffeeContext);
  const [selectedAmount, setSelectedAmount] = useState(() => amount);

  function handleRemoveFromCheckout() {
    removeCoffeeFromCheckout(coffeeId);
    toast.success(`${name} successfully removed from your cart !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  }

  function handleAddOrRemoveAmountFromSelectedCoffee(type: AmountTypeAction) {
    if (type === "REMOVE" && amount === 0) return;
    if (type === "REMOVE" && amount === 1) {
      return handleRemoveFromCheckout();
    }

    addOrRemoveAmountFromSelectedCoffee(type, coffeeId);

    if (type === "ADD") {
      toast.success(`Amount successfully added to ${name} !`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else if (type === "REMOVE") {
      toast.success(`Amount successfully removed from ${name} !`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  }

  return (
    <SelectedCoffeeItemContainer>
      <CoffeeImage src={image}></CoffeeImage>
      <div>
        <CoffeeTextSection>
          <span>{name}</span>
          <span>${price}</span>
        </CoffeeTextSection>
        <CoffeeActionButtons>
          <AmountSelector>
            <AmountButton
              onClick={() =>
                handleAddOrRemoveAmountFromSelectedCoffee("REMOVE")
              }
            >
              <Minus size={14} weight="bold"></Minus>
            </AmountButton>
            <AmountCounter>{amount}</AmountCounter>
            <AmountButton
              onClick={() => handleAddOrRemoveAmountFromSelectedCoffee("ADD")}
            >
              <Plus size={14} weight="bold"></Plus>
            </AmountButton>
          </AmountSelector>
          <CoffeeRemoveButton onClick={() => handleRemoveFromCheckout()}>
            <Trash size={22}></Trash>
            Remove
          </CoffeeRemoveButton>
        </CoffeeActionButtons>
      </div>
    </SelectedCoffeeItemContainer>
  );
}
