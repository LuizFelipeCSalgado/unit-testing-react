import styled from 'styled-components';

export const InfosContainer = styled.div`
    padding: 15px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const UserName = styled.a`
    padding: 5px;
    border-radius: 5px;
    font-size: 22px;
    text-decoration: none;
    transition: background-color 1s ease;
    color: black;
    text-transform: uppercase;

    :hover {
        background-color: rgba(0,0,0,0.25);
        transition: background-color 1s ease;
    }

`

export const UserAndLocation = styled.div`
    margin-left: 10px;
`

export const Location = styled.p`
    margin: 0;
    padding-left: 5px;
`

export const Repositories = styled.a`
    padding: 15px;
`