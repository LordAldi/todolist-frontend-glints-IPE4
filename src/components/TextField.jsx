import { useField } from "formik";
import React from "react";

const TextField = ({ name, label, valueProps = "", ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <div className="text-field">
      <label htmlFor={name}>{label}</label>
      {showError && <p className="error-message">{meta.error}</p>}

      <input
        name={name}
        {...props}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...field}
      />
    </div>
  );
};

export default TextField;
