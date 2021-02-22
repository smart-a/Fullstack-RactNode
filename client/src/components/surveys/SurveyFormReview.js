//Shows user inputs for review

import React from "react";
import { Form, Field } from "react-final-form";
import { FIELDS } from "./SurveyField";

const SurveyFormReview = ({ onCancel, values }) => {
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
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Survey Review</h2>
          {renderValues()}
          <button
            className="yellow darken-3 btn-flat white-text"
            onClick={onCancel}
          >
            Back
            <i className="material-icons left">arrow_back</i>
          </button>

          <button className="green darken-3 btn-flat white-text right">
            Finish
            <i className="material-icons right">done_all</i>
          </button>
        </form>
      )}
    />
  );
};

export default SurveyFormReview;
