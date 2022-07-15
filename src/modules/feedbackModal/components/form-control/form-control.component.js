import {
  FormControlDesc,
  FormControlHeading,
  FormControlWrapper,
} from "./form-control.style";

export const FormControl = ({ heading, desc, children }) => {
  return (
    <FormControlWrapper>
      <FormControlHeading> {heading} </FormControlHeading>
      <FormControlDesc> {desc} </FormControlDesc>
      {children}
    </FormControlWrapper>
  );
};
