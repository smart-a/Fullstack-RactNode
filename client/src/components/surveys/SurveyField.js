//Survey contains some logic to render a single fields (label and input) the survey form

import React from "react";
import styled from "styled-components";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Body", name: "body" },
  { label: "Recipients List", name: "recipients" },
];

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

const SurveyField = ({ input, label, meta }) => {
  return (
    <FieldWrapper>
      <FieldLabel>{label}:</FieldLabel>
      <FieldInput {...input} placeholder={label} />
      {meta.error && meta.touched && (
        <span className="red-text">{meta.error}</span>
      )}
    </FieldWrapper>
  );
};

export default SurveyField;
export { FIELDS };
