import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import {  DefaultImg, Container, Span, Button } from "../StylesAppBar.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(authSelectors.selectUserName);
    return (
    <Container>
        <picture><DefaultImg/></picture>
        <Span>Hi!,  {userData}</Span>
        <Button onClick={() => dispatch(authOperations.logOut())}>Log Out</Button>
    </Container>
  )
}


