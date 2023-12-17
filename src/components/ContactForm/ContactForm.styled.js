import styled from '@emotion/styled';
// import { Form, Field } from 'formik';

const Button = styled.button`
  background-color: #364d08;
  margin: 10px;
  padding: 10px 25px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
  border-radius: 10px;
  display: block;

  &:hover {
    background-color:#ffffff;
    color: #333333;
    text-decoration: none;
  }
`
const Label = styled.label`
font-weight: bold;
font-size: 15px;
display:flex;
flex-direction:column;
`
const FormView = styled.form`
max-width:400px;
border: 1px solid #2A363B;

padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:20px;
background-color: rgba(0, 0, 0, 0.3);
`
const Input = styled.input`
font-size: 10px;
width:200px;
height:20px;
border-radius: 5px;
border: none;
outline:none;

/* &:hover {
  background-color: #e9d362;
    color: #333333;
  } */
`

const Span = styled.span`
text-align: start;
margin-bottom: 5px;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`

export { Input, FormView, Label, Button, Span }

