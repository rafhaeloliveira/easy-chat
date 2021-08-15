import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";

const Login = () => {
  return (
    <Container component="div">
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
                <TextField label="Nome" variant="outlined" />
              </Grid>
              <Grid container item justify="center">
                <Button variant="contained" color="primary">
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
