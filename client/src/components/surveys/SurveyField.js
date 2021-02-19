//Survey contains some logic to render a single fields (label and input) the survey form

import React from "react";

export default ({ input, label, meta }) => {
  return (
    <div style={{ marginBottom: "10px", marginTop: "10px" }}>
      <label>{label}: </label>
      <input {...input} placeholder={label} />
      {meta.error && meta.touched && (
        <span className="red-text">{meta.error}</span>
      )}
    </div>
  );
};
