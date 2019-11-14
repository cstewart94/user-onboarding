import styled from 'styled-components';
import { Field, Form } from 'formik';

export const MainForm = styled.form`
  width: 300px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 2% 1%;
`;

export const InputForm = styled(Form)`
  display:flex
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 35px;
  border: 0.5px solid midnightblue;
  background-color: snow;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5rem;
  box-shadow: midnightblue  1px 2px 2px;
  margin: 4% 0.5%;
  padding: 0.75rem;

  &:focus,
  &:active {
    box-shadow: orangered 1px 2px 2px;
    border: 1px solid orangered;
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus{
    transition: background-color 1s ease-in-out 0s;
  }
`;

export const Title = styled.h1`
font-size: 25px;
line-height: 1.25rem;
margin-top: 0;
`;

export const CheckContainer = styled.label`
  display:flex;
  flex-direction: row;
  font-size:18px;
  align-items: center;
`
