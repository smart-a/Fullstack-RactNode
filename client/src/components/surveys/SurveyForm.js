import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Emails", name: "recipients" },
];
class SurveyForm extends Component {
  render() {
    const renderFields = () => {
      return (
        <div>
          {FIELDS.map(({ label, name }, key) => {
            return (
              <Field
                key={key}
                type="text"
                label={label}
                name={name}
                component={SurveyField}
              />
            );
          })}
        </div>
      );
    };

    const onSubmit = (values) => {
      alert(JSON.stringify(values));
    };

    const validate = (values) => {
      const errors = {};

      for (let value in values)
        if (!values[value]) errors[value] = `You must provide a ${value}`;

      return errors;
    };

    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {renderFields()}
            <Link className="red btn-flat white-text" to={"/surveys"}>
              Cancel
              <i className="material-icons right">cancel</i>
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        )}
      />
    );
  }
}

export default SurveyForm;
