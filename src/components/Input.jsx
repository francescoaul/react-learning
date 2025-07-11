import React from "react";

export default function InputField({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error,
  style,
  ...rest
}) {
  return (
    <div style={{ marginBottom: "1rem", ...style }}>
      {label && (
        <label
          htmlFor={id || name}
          style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}
        >
          {label}
        </label>
      )}

      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "0.5rem",
          border: `1px solid ${error ? "#e53e3e" : "#cbd5e0"}`,
          borderRadius: "4px",
          fontSize: "1rem"
        }}
        {...rest}
      />

      {error && (
        <p style={{ color: "#e53e3e", marginTop: "0.25rem", fontSize: "0.875rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
