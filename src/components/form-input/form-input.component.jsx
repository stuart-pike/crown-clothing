import "./form-input.styles.jsx";

import { FormInputLabel, Input, Group } from "./form-input.styles";

// eslint-disable-next-line react/prop-types
function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel $shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
