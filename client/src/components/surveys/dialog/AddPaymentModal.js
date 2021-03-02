import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import ModalField from "./ModalField";
import Payment from "../../payments";
import styled from "styled-components";

class AddPaymentModal extends Component {
  renderPayButton = ({ amount }) => {
    if (amount > 0) {
      return (
        <Payment
          amount={parseFloat(amount)}
          modalClass="waves-effect waves-green"
          onClose={() => this.props.onModalClose()}
        />
      );
    }
    return <button className="btn-flat grey white-text">Add Credits</button>;
  };

  render() {
    const ModalWrapper = styled.div`
      position: absolute;
      background-color: black;
      z-index: 9999;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
      transition: background-color 0.5s ease-in;
    `;

    const Model = styled.div`
      width: 400px;
      display: block;
      margin-top: 50px;
    `;

    return (
      <ModalWrapper>
        <Model className="modal">
          <div className="modal-content">
            <h5>Add Credits</h5>
            <Form
              onSubmit={() => {}}
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    type="text"
                    label={"Amount"}
                    name={"amount"}
                    component={ModalField}
                    initialValue={0}
                  />

                  <div className="modal-footer">
                    {this.renderPayButton(values)}
                    <button
                      type="button"
                      onClick={() => this.props.onModalClose()}
                      className="left modal-close waves-effect waves-green btn-flat yellow darken-3 white-text"
                    >
                      Cancel
                      <i className="material-icons left">close</i>
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </Model>
      </ModalWrapper>
    );
  }
}

export default AddPaymentModal;
