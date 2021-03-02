import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Heder";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "../components/surveys/SurveyNew";
import AddPaymentModal from "./surveys/dialog/AddPaymentModal";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  state = { showModal: false };

  PayModal() {
    //alert(`showModal: ${this.props.showModal}`);
    if (this.state.showModal) {
      document.body.style.overflowY = "hidden";
      return (
        <AddPaymentModal
          showModal={this.state.showModal}
          onModalClose={() => this.setState({ showModal: false })}
        />
      );
    }
    document.body.style.overflowY = "";
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            showModal={this.state.showModal}
            onPayClick={() => this.setState({ showModal: true })}
          />
          {this.PayModal()}
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/surveys"
              component={Dashboard}
              // render={(props) => (
              //   <Dashboard
              //     {...props}
              //     showModal={this.state.showModal}
              //     onModalClose={() => this.setState({ showModal: false })}
              //   />
              // )}
            />

            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
