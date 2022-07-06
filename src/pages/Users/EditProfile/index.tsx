import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormType {
  Password: any;
  ConfirmPassword:any
}
export default function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ delayError: 3000, mode: "onChange" });


  const onSubmit = (data: FormType) => {
    const userData = JSON.parse(localStorage.getItem("auth")!);
    userData.Password = data.Password;
    userData.ConfirmPassword=data.ConfirmPassword;
    localStorage.setItem("auth",JSON.stringify(userData));
    alert(JSON.stringify(userData));
    navigate("/");
  };
  const navigate = useNavigate();



  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ m: 3 }}>
            Edit Profile
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" sx={{ mr: 3, mt: 3, float: "right" }} onClick={() => navigate("/")}>
           Logout
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ m: 3 }}>
            Change password
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <Grid item xs={10}>

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

              <TextField
                margin="normal"
                fullWidth
                label="ConfirmPassword*"
                id="side-card-password"
                autoComplete="current-password"
                type="Password"
                error={errors.ConfirmPassword}
                helperText={errors.ConfirmPassword?.message}
                {...register("ConfirmPassword", {
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
            <Grid item xs={2}>
                <Button type='submit' variant="contained" sx={{ mr: 1, mt: 3, float: "right" }}>
                Change
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}