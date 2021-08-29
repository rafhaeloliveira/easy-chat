import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ProfileContext } from "../context/profile-provider";
import { ChatSocketContext } from "../context/socket-provider";
import {
  ProfileContextProps,
  ProfileProps,
} from "../models/profile-context.models";
import { SocketContextProps } from "../models/socket-context.models";

const Login = () => {
  const history = useHistory();

  const { profile, saveProfile }: ProfileContextProps =
    useContext(ProfileContext);
  const { socket } = useContext(ChatSocketContext) as SocketContextProps;

  const [name, setName] = useState("");

  const setProfileInfo = (e: FormEvent<EventTarget>) => {
    e.preventDefault();

    const newProfile: ProfileProps = {
      ...profile,
      user: name,
    };

    saveProfile(newProfile);

    socket.auth = { username: name };
    socket.connect();

    if (name) {
      history.push("/");
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Container component="form" onSubmit={setProfileInfo}>
      <Grid
        xs={12}
        container
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Paper style={{ padding: 15 }} elevation={3}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  label="Nome"
                  variant="outlined"
                  onChange={handleName}
                />
              </Grid>
              <Grid container item justify="center">
                <Button variant="contained" color="primary" type="submit">
                  Acessar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
