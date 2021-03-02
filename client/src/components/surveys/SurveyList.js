import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import Loader from "react-loader-spinner";

class SurveyList extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  centered = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  };

  renderSurvey() {
    if (this.state.loading) {
      setTimeout(() => this.setState({ loading: false }), 1000);
      return (
        <div style={this.centered}>
          <Loader
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000} //3 secs
          />
        </div>
      );
    }
    return this.props.surveys
      .map((survey) => {
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
      })
      .reverse();
  }

  render() {
    return (
      <div style={{ marginBottom: 30 }}>
        <h3>Survey List</h3>
        {this.renderSurvey()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
