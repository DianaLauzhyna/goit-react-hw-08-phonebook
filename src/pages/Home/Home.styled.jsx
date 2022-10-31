import styled from 'styled-components';

import cool from '../../assets/backgroundImage.jpg';

export const TitleDiv = styled.div`
width: fit-content;
margin:  0 auto;
position: absolute;
top: 10px;
right: 10px;`;

export const MainStyle = styled.main`
background-image: url('${cool}');
background-size: cover;
height: 100% ;`;

export const DivIsAuth = styled.div`
display: flex;
padding: 100px;`;

