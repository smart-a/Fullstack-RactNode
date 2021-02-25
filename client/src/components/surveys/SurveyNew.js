//Shows the SurveyForm and SurveyFormReview

import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = {
    showFormReview: false,
    data: { title: "", subject: "", body: "", recipients: "" },
  };

  renderContent() {
    if (this.state.showFormReview)
      return (
        <SurveyFormReview
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
          values={this.state.data}
        />
      );

    return (
      <SurveyForm
        onSurveySubmit={(data) => {
          this.setState({
            showFormReview: true,
            data,
          });
        }}
        values={this.state.data}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
