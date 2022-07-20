import { FormInput, FormTextarea } from "./form-control-input.style";

export const FormControlInput = ({
  isInput = true,
  name,
  placeholder = "",
  innerRef,
  value = ""
}) => {
  if (isInput) {
    return <FormInput defaultValue={value} ref={innerRef} name={name} required placeholder={placeholder} />;
  } else {
    return <FormTextarea defaultValue={value} ref={innerRef} name={name} required placeholder={placeholder} />;
  }
};
