import styled from 'styled-components';



export const ThemeButton = styled.button`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
color: ${(props) => props.backgroundColor};
`;

export const InputOne = styled.input`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
color: ${(props) => props.backgroundColor};
width:150px;
height:100px;
font-style: ${(props) => props.fontweight};
text-decoration:${(props) => props.under} ;






`;
