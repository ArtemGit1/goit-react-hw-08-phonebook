import styled from '@emotion/styled';
import { HiUser } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 30px 30px;
    align-items: center;
    border-bottom: 1px solid #2A363B;
    `

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight:700;
  color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`

const Container = styled.div`
display: flex;
align-items: center;

 `
const Div = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 12px;

 `
const Span = styled.span`
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
font-weight: 700;
margin-right: 12px;`

const DefaultImg = styled(HiUser)`
width: 40px;
  height: 40px;
  /* object-fit: cover; */
  color: #333333;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #85ba1c;
  `

const Button = styled.button`
 background-color: #364d08;
  margin: 10px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
  border-radius: 10px;
  display: block;

  &:hover {
    background-color: #ffffff;
    color: #333333;
    }
`;

export { Header, Div, Link, DefaultImg, Span, Container, Button }

