import styled from 'styled-components';

type ContainerProps = {
    bgColor: string;
 }
 export const Container = styled.div<ContainerProps>`
    background-color: ${bgc => bgc.bgColor};
    color: white;
    padding: 20px;

    .link {
        color: white;

        &:hover {
            color: #FF0000;
        }
    }
 `;
 
 
 type BotaoProps = {
    bg: string;
    small?: boolean;  
 }
 export const Botao = styled.button<BotaoProps>`
   font-size: ${props => props.small ? '15px' : '30px'};
   background-color: ${props => props.bg};
 `;