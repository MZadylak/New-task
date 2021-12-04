import React from 'react';
import styled from 'styled-components';
import { Image, Row } from './styled';
import Picture from "./../../img/picture.jpg";

const StyledRow = styled(Row)`
    background-image: url('https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`

// const Task4 = () => <Image src={ Picture } alt={ "picture" } />; First way
const Task4 = () => <StyledRow />; //Second

export default Task4;