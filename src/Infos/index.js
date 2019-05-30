import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import {
  UserAndLocation,
  Location,
  Repositories,
  UserInfo,
  UserName,
  InfosContainer
} from "./styles";

const useStyles = makeStyles({
  bigAvatar: {
    width: 80,
    height: 80
  }
});

export default function Infos() {
  const classes = useStyles();
  return (
    <InfosContainer>
      <UserInfo>
        <Avatar className={classes.bigAvatar}>
          <img
            width="100px"
            src="http://seuguiadeinvestimentos.com.br/wp-content/uploads/2014/03/Como-definir-o-seu-perfil-de-investimento-Seu-Guia-de-Investimentos.png"
            alt="userName"
          />
        </Avatar>
        <UserAndLocation>
          <UserName href="#">Usuário tal</UserName>
          <Location>Terra do nunca</Location>
        </UserAndLocation>
      </UserInfo>
      <Repositories href="#">
        Possui <b>X</b> repositórios.
      </Repositories>
    </InfosContainer>
  );
}
