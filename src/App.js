import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { Application, Header, MainContainer, Logo } from "./styles";

import Infos from "Infos";

const useStyles = makeStyles({
  button: {
    height: 35,
  },
});

function App() {
  const [name, setName] = useState("");
  const classes = useStyles();
  return (
    <Application>
      <MainContainer>
        <Header>
          <Logo
            src="https://www.menosfios.com/wp-content/uploads/2018/06/GitHub-Menos-Fios.jpg"
            width="100px"
          />
          <TextField
            autoFocus
            fullWidth
            style={TextFieldStyle}
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Nome do usuário"
          />
          <Button className={classes.button} variant="contained" color="primary">Buscar</Button>
        </Header>
        <Infos />
      </MainContainer>
    </Application>
  );
}

const TextFieldStyle = {
  width: "100%",
  margin: "0 5px",
  alignSelf: "center"
};

export default App;
