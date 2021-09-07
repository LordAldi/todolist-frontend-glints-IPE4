import { useField } from "formik";
import React from "react";

const TextField = ({ name, label, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...props}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...field}
      />
      {showError && <p>{meta.error}</p>}
    </div>
  );
};

export default TextField;
