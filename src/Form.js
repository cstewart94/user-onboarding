import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MainForm, Input, CheckContainer, InputForm } from './Theme.js';

const Forms = ({ values, errors, touched, status, valid }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status])
  }, [status])

  return (
    <>
      <InputForm>
        <label htmlFor='name'>
          <Input type='text' name='name' placeholder='Name' valid={touched.name && !errors.name} />
        </label>
        {touched.name && errors.name && (<p className='errors'>{errors.name}</p>)}

        <label htmlFor='email'>
          <Input type='email' name='email' placeholder='Email' />
        </label>
        {touched.email && errors.email && (<p className='errors'>{errors.email}</p>)}

        <label htmlFor='password'>
          <Input type='text' name='password' placeholder='Password' />
        </label>
        {touched.password && errors.password && (<p className='errors'>{errors.password}</p>)}

        <CheckContainer>Agree to Terms
          <Field type='checkbox' name='tos' checked={values.tos} />
        </CheckContainer>
        {touched.tos && errors.tos && (<p className='errors'>{errors.tos}</p>)}

        <button type='submit'>Submit!</button>
      </InputForm>
      {user.map(newUser => (
        <ul key={newUser.id}>
          <li>Name: {newUser.name}</li>
          <li>Email: {newUser.email}</li>
          <li>Password: {newUser.password}</li>
        </ul>
      ))}
    </>
  )
}
const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Name is a required field!')
      .min(2, 'Too Short! Must be at least 2 characters'),
    email: Yup.string()
      .required('Email is a required field!')
      .email('Please enter a valid email address'),
    password: Yup.string()
      .required('Password is a required field!')
      .min(8, 'Too Short! Must be at least 8 characters'),
    tos: Yup.bool()
      .oneOf([true], 'Terms of Service is a required field!')
  }),
  handleSubmit(values, { setStatus }) {
    axios.post('https://reqres.in/api/users', values)
      .then(response => {
        setStatus(response.data);
        console.log(response)
      })
      .catch(error => console.log(error.response))
  }
})(Forms);

export default FormikUserForm;
/*We want to create a form to onboard a new user to our system. We need at least the following pieces of information about our new user:

Name
Email
Password
Terms of Service (checkbox)
A Submit button to send our form data to the server.*/