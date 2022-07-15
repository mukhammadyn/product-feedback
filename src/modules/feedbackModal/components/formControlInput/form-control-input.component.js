import { FormInput, FormTextarea } from "./form-control-input.style";

export const FormControlInput = ({
  isInput = true,
  name,
  placeholder = "",
  innerRef
}) => {
  if (isInput) {
    return <FormInput ref={innerRef} name={name} required placeholder={placeholder} />;
  } else {
    return <FormTextarea ref={innerRef} name={name} required placeholder={placeholder} />;
  }
};
