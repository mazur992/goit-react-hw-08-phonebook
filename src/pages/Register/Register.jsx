import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import { ContainerRegisterForm } from 'components/App.styled';

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      operations.register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const schema = object({
    name: string().required(),
    email: string().required(),
    password: string().min(6).max(12).required(),
  });
  return (
    <ContainerRegisterForm>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <h2>Registration</h2>

          <label htmlFor="name">
            Name
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div"></ErrorMessage>
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
          <Link to="/login">Already registered? Sign In </Link>
        </Form>
      </Formik>
    </ContainerRegisterForm>
  );
}
