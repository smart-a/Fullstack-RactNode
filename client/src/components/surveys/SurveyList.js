import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurvey() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          key={survey._id}
          className="card blue-grey darken-1 white-text"
          style={{ marginTop: "10px" }}
        >
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
            <span className="right">
              Last feedback: {new Date(survey.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurvey()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
