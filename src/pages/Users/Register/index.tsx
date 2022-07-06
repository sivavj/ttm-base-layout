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
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from '../../../../public/static/image/image/login2.svg'

interface FormType {
  userId: any;
  names: string;
  email: string;
  Password: any;
  ConfirmPassword: any;
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormType>({ delayError: 2000, mode: "onChange" });

  const onSubmit = async (data: FormType) => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        ConfirmPassword: data.ConfirmPassword,
        Password: data.Password,
        names: data.names,
        email: data.email,
        userId: data.userId,
      })
    );
    alert(`${JSON.stringify(data)}Your successfully register`);
    navigate("/")
    reset();
  };
  const Password = useRef({});

  Password.current = watch("Password", "");

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
              <Typography
                component="h2"
                variant="h6"
                sx={{ fontSize: 14, fontWeight: 600, mt: 1 }}
              >
                create new account
              </Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      label="User ID *"
                      id="side-card-user ID"
                      autoComplete="current-userId"
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="signup-Name"
                      label="Name"
                      name="Name"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="signup-email"
                      label="Email Address *"
                      autoComplete="email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                          message:
                            "Email must have one'@',one'.' and use no special characters",
                        },
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      label="Password*"
                      id="side-card-password"
                      autoComplete="current-password"
                      type="Password"
                      error={errors.Password}
                      helperText={errors.Password?.message}
                      {...register("Password", {
                        minLength: 8,
                        maxLength: 20,
                        required: "You must specify a Password",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&`~\/,."';:]).*$/,
                          message:
                            "Password must have at least 8 characters (ex:India@$/;)",
                        },
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      label="ConfirmPassword"
                      id="side-card-password"
                      autoComplete="current-password"
                      type="Password"
                      error={errors.ConfirmPassword}
                      helperText={errors.ConfirmPassword?.message}
                      {...register("ConfirmPassword", {
                        minLength: 8,
                        maxLength: 20,
                        validate: (value: {}) =>
                          value === Password.current ||
                          "The Passwords do not match",
                      })}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  
                >
                  Sign Up
                </Button>
              </form>

              <Box sx={{ mt: 2 }}>
                <Link
                  href="#"
                  underline="none"
                  variant="body2"
                  onClick={() => navigate("/")}
                >
                  Already have an account? Login
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
}