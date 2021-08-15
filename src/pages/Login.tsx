import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ProfileContext } from "../context/profile-provider";

const Login = () => {
  const history = useHistory();

  const { profile, saveProfile }: any = useContext(ProfileContext);

  const [name, setName] = useState();

  const setProfileInfo = (e: any) => {
    e.preventDefault();

    const newProfile = {
      ...profile,
      user: name,
    };

    saveProfile(newProfile);

    if (name) {
      history.push("/");
    }
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("profile =>", profile);
  }, [profile]);

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
