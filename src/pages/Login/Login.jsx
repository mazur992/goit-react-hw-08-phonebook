import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/operations';
import { ContainerLoginForm } from 'components/App.styled';
import { Button } from '@mui/material';

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(operations.logIn({ email, password }));
    resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const schema = object({
    email: string().required(),
    password: string().min(6).max(12).required(),
  });
  return (
    <ContainerLoginForm>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <h2>Login</h2>

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
          <Button type="submit" variant="contained">
            Log In
          </Button>
          <Link to="/register">Don't have an account. Sign Up </Link>
        </Form>
      </Formik>
    </ContainerLoginForm>
  );
}
