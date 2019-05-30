import styled from 'styled-components';
import { colors } from './constants';

export const Application = styled.div`
    background-color: ${colors.darker};
    color: white;
    height: 100vh;
`

export const MainContainer = styled.div`
    border-radius: 5px;
    width: 800px;
    color: rgba(0,0,0,0.8);
    margin: 0 auto;
    padding: 10px;
    position: relative;
`

export const Header = styled.div`
    display: flex;
    background: white;
    border-radius: 5px;
    padding: 15px;
    align-items: center;
`

export const Logo = styled.img`
    border-radius: 5px;
    width: ${props => props.width};
    height: ${props => `${+(props.width.substring(0,props.width.length - 2))/2}px`}
`
