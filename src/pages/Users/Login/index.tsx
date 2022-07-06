import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { blue } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from '../../../../public/static/image/image/login2.svg'
// import "@fontsource/roboto/300.css";
// import "../styles.css";

interface FormType {
  userId: string;
  Password: any;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm<FormType>({ delayError: 3000, mode: "onChange" });
  const onSubmit = (data: FormType) => {
    const userData=JSON.parse(localStorage.getItem("auth")!)
    if(userData){
      if(userData.Password===data.Password && userData.userId===data.userId){
        alert(`${userData.userId} Your successfully logged`);
        navigate("/user-profile/edit-profile");
      }else{
        alert("UserId or Password not matching");
      }
    }
   reset();
  };

  const navigate = useNavigate();

  return (
    <Grid
      container
      component="main"
      alignItems="center"
      sx={{
        bgcolor: blue[800],
        height: "100vh",
      }}
    >
      <Grid item xs={false} md={7} sm={6}>
        <Box
          component="img"
          src={Logo}
          sx={{ width: "60%", float: "right" }}
        />
      </Grid>
      <Grid item xs={12} md={5} sm={6}>
        <Container
          maxWidth="xs"
          sx={{
            my: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card>
            <CardContent>
              <Box
                alt="logo"
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIkaZBDG0b3QQ5c_Uxa8j-Q0nFqOw6g6viA&usqp=CAU"
                width={40}
                height={40}
                sx={{ mb: 1 }}
              />
              <Typography
                component="h1"
                variant="h6"
                sx={{ fontSize: 16, fontWeight: 800 }}
              >
                THE THINGSMATE LORAWAN MANAGEMANT
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="User ID *"
                  id="side-card-user ID"
                  error={!!errors.userId}
                  helperText={errors.userId?.message}
                  {...register("userId", {
                    maxLength: 20,
                    required: "User ID is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[0-9]).*$/,
                      message:
                        "User ID must have less then 20 character include number(ex:india1947)",
                    },
                  })}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Password *"
                  type="Password"
                  id="side-card-Password"
                  autoComplete="current-Password"
                  error={!!errors.Password}
                  helperText={errors.Password?.message}
                  {...register("Password", {
                    minLength:8,
                    maxLength: 20,
                    required: "Password is required.",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&`~\/,."';:]).*$/,
                      message:
                        "Password must have at least 8 characters (ex:India@$/;)",
                    },
                  })}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </form>

              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    underline="none"
                    variant="body2"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    underline="none"
                    variant="body2"
                    onClick={() => navigate("/register")}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
}