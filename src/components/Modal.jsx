import { Form, Formik } from "formik";
import React from "react";
import { createPortal } from "react-dom";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/authContext";
import TextField from "./TextField";

const UpdateForm = ({ onSubmit }) => {
  return (
    <Form>
      <TextField
        name="email"
        label="Email"
        placeholder="example@web.com"
        autoComplete="username"
        type="email"
      />
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        autoComplete="name"
        type="text"
      />
      <div className="button" onClick={onSubmit}>
        Update
      </div>
    </Form>
  );
};

const Modal = ({ isVisible, hideModal, user }) => {
  console.log(user);
  const { updateUser } = useAuth();
  const history = useHistory();
  const initialValues = {
    email: user.email,
    username: user.username,
  };
  return isVisible
    ? createPortal(
        <>
          <div className="modal-overlay"></div>
          <div className="detail-modal">
            <div className="form-card">
              <div className="closeBtn" onClick={hideModal}>
                X
              </div>
              <h1 className="title">Update User</h1>
              <Formik
                initialValues={initialValues}
                onSubmit={(val) => updateUser(val, user.id, history)}
              >
                {({ handleSubmit }) => <UpdateForm onSubmit={handleSubmit} />}
              </Formik>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;
