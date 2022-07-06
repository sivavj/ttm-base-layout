import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { blue } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from '../../../../public/static/image/image/login2.svg'

interface FormType {
  userId:string;
  Password: any;
  Passwords:any
}
export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },watch
  } = useForm<FormType>(
    
    {delayError:3000,mode:"onChange"});
  const onSubmit = (data: FormType) => {
    const userData = JSON.parse(localStorage.getItem("auth")!)
    alert(userData.Password)
    if(userData){
      if(userData.userId===data.userId){
        navigate('/edit');
      }else{
        alert("userId is not matching")
      }
    }
   
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
              <Typography component="h1" variant="h5" sx={{fontSize:14,fontWeight:600}}>
                Reset password
              </Typography>
              <Typography sx={{ fontSize: 12,mt:2 }}>
                Please enter your user ID to recevie an email with reset
                instructions
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="side-card-userId"
                  label="userId"
                  autoComplete="userId"
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
                
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Button
                      size="medium"
                      type="submit"
                      variant="contained"
                      sx={{ pr: 2 }}
                    >
                      Send
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      size="medium"
                      onClick={() => navigate("/")}
                    >
                      cancel
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
}