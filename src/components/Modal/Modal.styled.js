import styled from '@emotion/styled';

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); 
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  `;

const ModalContainer = styled.div`
width: 300px;
height: 400px auto;
border-radius: 10px;
background-color: rgb(140, 128, 250);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
`

const ModalBorder = styled.div`
display: flex;
font-weight: 100;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.3);
width: 100%;
align-items: center;
border-radius: 10px;
padding: 5px;
text-align: center;
border:1px solid black;
`
const ModalLink = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
padding: 10px;
text-align: center;
`
const Title = styled.h2`
 display: inline-block;
text-align: center;
`
const TitleCloseBtn = styled.div`
margin-left: auto;
`
const CloseBtn = styled.button`
margin-right: auto;
border-radius: 5px;
padding: 2px 5px;
background-color: #364d08;
margin: 5px;
color: #ffffff;
&:hover {
    background-color:#ffffff;
    color: #333333;
    text-decoration: none;
}
`
const Body = styled.div`
flex: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.3rem;
text-align: center;`

const Button = styled.button`
  background-color: #364d08;
  width: 100px;
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  transition: 0.5s;
  font-size: 15px;
  color: #F5FFFA;
  border-radius: 10px;
  display: block;

  &:hover {
    background-color:#ffffff;
    color: #333333;
    text-decoration: none;
  }
`;

const Text = styled.p`
color: rgba(0, 0, 0, 0.6);
font-weight: 400;
`
const P = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.3);
font-weight: 00;
width: 95%;
max-width: 300px;
align-items: center;
border-radius: 10px;
padding: 5px;
text-align: center;
border:1px solid black;

`

export { ModalBackground, ModalContainer, Title, TitleCloseBtn, Body, Button, P, Text, ModalBorder, ModalLink, CloseBtn }