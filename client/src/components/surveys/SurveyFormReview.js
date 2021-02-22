//Shows user inputs for review

import React from "react";
import { FIELDS } from "./SurveyField";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, values, submitSurvey, history }) => {
  const renderValues = () => {
    return (
      <div>
        {FIELDS.map(({ label, name }, key) => {
          return (
            <div key={key} style={{ marginBottom: "10px", marginTop: "10px" }}>
              <label>{label}: </label>
              <div>{values[name]}</div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <h2>Survey Review</h2>
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
        <i className="material-icons right">email send</i>
      </button>
    </div>
  );
};

export default connect(null, actions)(withRouter(SurveyFormReview));
