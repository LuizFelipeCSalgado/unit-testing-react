import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Application, Header, MainContainer, Logo } from "./styles";

import Infos from "./Infos";

function App() {
  const [name, setName] = useState("");
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
          <Button>Buscar</Button>
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
