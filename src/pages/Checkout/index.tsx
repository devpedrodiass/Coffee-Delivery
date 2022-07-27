import { CaretLeft } from "phosphor-react";
import React, { useContext, useState } from "react";
import AddressForm from "./components/AddressForm";
import ConfirmSection from "./components/ConfirmSection";
import PaymentSection from "./components/PaymentSection";
import { CardsWrapper, CheckoutContainer, ReturnButton } from "./styles";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { paymentMethod } from "../../reducers/coffees/reducer";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const newDeliveryInformationValidationSchema = zod.object({
  postalCode: zod.number(),
  street: zod.string().min(2, "Type a task"),
  number: zod.number(),
  complement: zod.string().min(2, "Type a task"),
  district: zod.string().min(2, "Type a task"),
  city: zod.string().min(2, "Type a task"),
  state: zod.string().min(2, "Type a task"),
});

type NewDeliveryInformationFormData = zod.infer<
  typeof newDeliveryInformationValidationSchema
>;

export default function Checkout() {
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<paymentMethod>(() => "none");

  const { checkout, submitDeliveryInformation } = useContext(CoffeeContext);

  const defaultValues = checkout.deliveryInformation.street
    ? checkout.deliveryInformation
    : undefined;

  const newDeliveryInformationForm = useForm<NewDeliveryInformationFormData>({
    resolver: zodResolver(newDeliveryInformationValidationSchema),
    defaultValues: defaultValues && {
      city: "",
      complement: "",
      district: "",
      number: 0,
      postalCode: 0,
      state: "",
      street: "",
    },
  });

  const { handleSubmit, reset, watch } = newDeliveryInformationForm;
  const deliveryInformation = watch("street");
  const isSubmitDisabled = !deliveryInformation;

  function handleSubmitOrder(data: NewDeliveryInformationFormData) {
    console.log("entrou");
    const newData = {
      ...data,
      paymentMethod: selectedPaymentMethod,
    };
    console.log("newData");
    submitDeliveryInformation(newData);
    toast.success(`Order successfully confirmed !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    navigate("/order-confirmed");
    reset();
  }

  function selectPaymentMethod(newPaymentMethod: paymentMethod) {
    setSelectedPaymentMethod(newPaymentMethod);
  }

  console.log(isSubmitDisabled);
  return (
    <>
      <ReturnButton to={"/"}>
        <CaretLeft size={24} weight="bold"></CaretLeft>
        Go back
      </ReturnButton>
      <CheckoutContainer onSubmit={handleSubmit(handleSubmitOrder)}>
        <div>
          <h1>Complete your order</h1>
          <CardsWrapper>
            <FormProvider {...newDeliveryInformationForm}>
              <AddressForm></AddressForm>
              <PaymentSection
                selectedPaymentMethod={selectedPaymentMethod}
                selectPaymentMethod={selectPaymentMethod}
              ></PaymentSection>
            </FormProvider>
          </CardsWrapper>
        </div>
        <div>
          <h1>Selected coffees</h1>
          <ConfirmSection isSubmitDisabled={isSubmitDisabled}></ConfirmSection>
        </div>
      </CheckoutContainer>
    </>
  );
}
