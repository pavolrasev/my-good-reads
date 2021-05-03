import React, { useState, useEffect } from "react";
import isFunction from "lodash/isFunction";

interface TextInputProps {
  name: string,
  type?: "text"|"number"|"search"|"phone",
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement> ) => void
}

const TextInput = ({ name = "", type = "text", value = "", onChange, ...rest }: TextInputProps) => {
  const [defaultValue, setDefaultValue] = useState(value || "");

  useEffect(() => {
    setDefaultValue(value);
  }, [value])
  
  const handleChange = (e: any) => {
      setDefaultValue(e.target.value);
      if (onChange && isFunction(onChange)) {
          onChange(e);
      }
  };

  return <input type={type} name={name} value={defaultValue} onChange={handleChange} {...rest} />;
};

export default TextInput;
