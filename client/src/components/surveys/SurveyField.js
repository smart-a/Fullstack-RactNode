//Survey contains some logic to render a single fields (label and input) the survey form

import React from "react";

export default ({ input, label }) => {
  return (
    <div>
      <label>{label}: </label>
      <input {...input} placeholder={label} />
    </div>
  );
};
