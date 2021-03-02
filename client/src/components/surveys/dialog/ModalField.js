//Survey contains some logic to render a single fields (label and input) the survey form

import React from "react";
import styled from "styled-components";

const FieldWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const FieldLabel = styled.label`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

const FieldInput = styled.input`
  padding: 10px;
`;

const ModalField = ({ input, label, meta }) => {
  return (
    <FieldWrapper style={{ marginBottom: "10px", marginTop: "10px" }}>
      <FieldLabel>{label}: </FieldLabel>
      <FieldInput {...input} placeholder={label} autoComplete="off" />
      {meta.error && meta.touched && (
        <span className="red-text">{meta.error}</span>
      )}
    </FieldWrapper>
  );
};

export default ModalField;
