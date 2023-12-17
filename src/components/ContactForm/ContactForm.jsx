import React, { useState } from 'react';
// import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Input, Label, FormView, Button, Span } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelector } from 'redux/contacts';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.selectContacts);

  const handleChangeForm = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const id = nanoid();

   const handelCheckUniqueContact = (name) => {
   const isNameContact = !!contacts.find((item) => item.name.toLowerCase() === name.toLowerCase());
    isNameContact && alert(`${name} is already in items`)
    return !isNameContact
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const isValidatedForm = validateForm();
if (isValidatedForm) {
    dispatch(contactsOperations.addContact({ id, name, number }));
    resetForm();
    }
  else {
    resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return handelCheckUniqueContact(name);
  };

  return (
    
      <FormView onSubmit={handelSubmit}>
        <Label htmlFor={id}>
          <Span>Name :</Span>
          <Input
            type="text"
            name="name"
            value={name}
            id={id}
            onChange={handleChangeForm}
            placeholder="Enter contact name"
            title="Names are limited to letters, apostrophes, dashes, and spaces. For instance, valid names include Emily, Alex O'Connor, and Mary-Jane Smith." required minLength={2}
          />
         
        </Label>
        <Label htmlFor="">
          <Span>Number :</Span>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChangeForm}
            placeholder="Enter contact number"
            title="The phone number should consist of digits and may include spaces, dashes, and parentheses. It is also allowed to begin with a plus sign (+)." required />
         
        </Label>
        <Button type="submit">Add contact</Button>
      </FormView>
    
  );
};




