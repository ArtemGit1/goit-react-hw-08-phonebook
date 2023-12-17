import styled from '@emotion/styled';

const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
align-items: center;
color: #F5FFFA;
margin-left: auto;
margin-right: auto;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  `
const Title = styled.h1`
font-weight: 900;
margin: 15px 0px;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
font-family: 'Arial', sans-serif;

  `
const H2 = styled.h2`
font-weight: 400;
margin: 10px 0;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  `
const Container = styled.div`

    display: flex;
align-items: center;
flex-direction: column;
    
`
const Span = styled.span`
 margin-top: 15px;
 font-weight: 500;
 
 &:hover{

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
color: #e9d362;
}`

const Error = styled.div`
  /* color: #fc8181; */
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0.25rem;

 `

export { Container, Title, Div, H2, Error, Span }
