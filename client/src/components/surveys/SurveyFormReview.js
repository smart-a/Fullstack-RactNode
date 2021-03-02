//Shows user inputs for review

import React from "react";
import { FIELDS } from "./SurveyField";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import styled from "styled-components";

const SurveyFormReview = ({ onCancel, values, submitSurvey, history }) => {
  const FieldWrapper = styled.div`
    margin-bottom: 10px;
    margin-top: 10px;
  `;

  const FieldLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: black;
  `;

  const FieldDiv = styled.div`
    padding: 10px;
    margin-bottom: 10px;
  `;

  const renderValues = () => {
    return (
      <div>
        {FIELDS.map(({ label, name }, key) => {
          return (
            <FieldWrapper key={key}>
              <FieldLabel>{label}: </FieldLabel>
              <FieldDiv>{values[name]}</FieldDiv>
            </FieldWrapper>
          );
        })}
      </div>
    );
  };

  const FormWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
  `;

  const FormTitle = styled.span`
    font-size: 2rem;
    font-weight: bolder;
  `;

  return (
    <FormWrapper className="card">
      <div className="card-content">
        <FormTitle>Survey Review</FormTitle>
        {renderValues()}
        <button
          className="yellow darken-3 btn-flat white-text"
          onClick={onCancel}
        >
          Back
          <i className="material-icons left">arrow_back</i>
        </button>
        <button
          className="green darken-3 btn-flat white-text right"
          onClick={() => submitSurvey(values, history)}
        >
          Send Survey
          <i className="material-icons right">send</i>
        </button>
      </div>
    </FormWrapper>
  );
};

export default connect(null, actions)(withRouter(SurveyFormReview));
