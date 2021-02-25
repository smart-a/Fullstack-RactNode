import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import SurveyField, { FIELDS } from "./SurveyField";
import validateEmails, { refineEmails } from "../../Utiles/validateEmails";
class SurveyForm extends Component {
  render() {
    const renderFields = () => {
      const values = this.props.values;
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
                initialValue={values[name]}
              />
            );
          })}
        </div>
      );
    };

    const onSubmit = (values) => {
      values.recipients = refineEmails(values.recipients);
      this.props.onSurveySubmit(values);
    };

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
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {renderFields()}
            <Link className="red btn-flat white-text" to={"/surveys"}>
              Cancel
              <i className="material-icons left">cancel</i>
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
            </button>
            <div>{this.state}</div>
          </form>
        )}
      />
    );
  }
}

export default SurveyForm;
