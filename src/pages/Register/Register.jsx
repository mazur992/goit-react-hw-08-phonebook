import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';

export default function Register() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('values: ', values);
    resetForm();
  };

  const initialValues = {
    login: '',
    email: '',
    password: '',
  };
  const schema = object({
    login: string().required(),
    email: string().required(),
    password: string().min(6).max(12).required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <h2>Registration</h2>

        <label htmlFor="login">
          Login
          <Field type="login" name="login" />
          <ErrorMessage name="login" component="div"></ErrorMessage>
        </label>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div"></ErrorMessage>
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div"></ErrorMessage>
        </label>
        <button type="submit">Sign In</button>
      </Form>
    </Formik>
  );
}
