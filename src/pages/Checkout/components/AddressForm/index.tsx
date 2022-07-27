import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import {
  AddressFormContainer,
  FormSection,
  HeaderSection,
  InputForm,
} from "./styles";

export default function AddressForm() {
  const { register } = useFormContext();
  return (
    <AddressFormContainer>
      <HeaderSection>
        <div>
          <MapPinLine size={22}></MapPinLine>
          <h1>Delivery address</h1>
        </div>
        <p>Enter the address where you want to receive your order</p>
      </HeaderSection>
      <FormSection>
        <InputForm
          id="postalCode"
          placeholder="Postal Code"
          width="33%"
          type="number"
          {...register("postalCode", { valueAsNumber: true })}
        ></InputForm>
        <InputForm
          id="street"
          placeholder="Street"
          width="100%"
          type="text"
          {...register("street")}
        ></InputForm>
        <div>
          <InputForm
            id="number"
            placeholder="Number"
            width="33%"
            type="number"
            {...register("number", { valueAsNumber: true })}
          ></InputForm>
          <InputForm
            id="complement"
            placeholder="Complement"
            width="67%"
            type="text"
            {...register("complement")}
          ></InputForm>
        </div>
        <div>
          <InputForm
            id="district"
            placeholder="District"
            width="33%"
            type="text"
            {...register("district")}
          ></InputForm>
          <InputForm
            id="city"
            placeholder="City"
            width="33%"
            type="text"
            {...register("city")}
          ></InputForm>
          <InputForm
            id="state"
            placeholder="State"
            width="33%"
            type="text"
            {...register("state")}
          ></InputForm>
        </div>
      </FormSection>
    </AddressFormContainer>
  );
}
