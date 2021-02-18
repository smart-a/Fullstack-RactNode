import React, { Component } from "react";
import { Form, Field } from "react-final-form";

class SurveyForm extends Component {
  render() {
    const onSubmit = (value) => {
      alert(JSON.stringify(value));
    };
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field type="text" name="surveyTitle" component={"input"} />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default SurveyForm;
