import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../Utiles/validateEmails";

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

    // const onSubmit = () => {
    //   this.props.onSurveySubmit();
    // };

    const validate = (values) => {
      const errors = {};

      //Validate recipients/ emails
      errors.recipients = validateEmails(values.recipients || "");

      //Require all fields
      for (const { label, name } of FIELDS) {
        if (!values[name]) errors[name] = `You must provide value for ${label}`;
      }

      return errors;
    };

    return (
      <Form
        onSubmit={this.props.onSurveySubmit}
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
