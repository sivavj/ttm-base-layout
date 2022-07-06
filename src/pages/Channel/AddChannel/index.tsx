import { FormEvent, useState } from "react";
import {
  Button,
  Grid,
  Container,
  Box,
  Typography,
  TextField,
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useForm } from "react-hook-form";


interface InputFieldData {
  owner: string;
  channelid: string;
  channelname: string;
  description: string
}

const data = [
  { value: "karthi", label: "karthi" },
  { value: "sk", label: "sk" }
]

function AddChannel(): JSX.Element {
  const { register, formState: { errors }, handleSubmit, reset } = useForm<InputFieldData>({delayError:1000,mode:"onSubmit" });

  const onSubmit = (data: InputFieldData) => {
    console.log(data);
    alert(JSON.stringify(data))
    reset({
      owner: "",
      channelname: '',
      channelid: '',
      description: ''
    })
  };

  return (
    <div>
      <Grid >
        <Container component="main" maxWidth="sm" sx={{ mt: 8, float: 'left' }}>
          <Typography variant="h4" sx={{ mt: 4 }} >Add Channel</Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
            <Grid container spacing={1.5}>
              <Grid item xs={12} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Owner*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    defaultValue=""
                    label="Owner"
                    inputProps={register("owner", { required: true })}
                    size="small"
                  >
                    {data.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid> 
              <Grid item xs={12} >
                <TextField label="Channel ID*" fullWidth
                  {...register("channelid", { required: "Channel ID is required",minLength: {
                    value: 5,
                    message: "min length is 5"
                  } })}
                  size="small"
                  error={!!errors.channelid}
                  helperText={errors.channelid?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("channelname")} label="Channel Name" fullWidth size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField multiline maxRows={4} rows={2} fullWidth label='Description' {...register('description')} />
                <Typography sx={{ mt: 2 }}>Optional channel description; can also be used to save notes about the channel</Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Create Channel
            </Button>
          </Box>
        </Container>
      </Grid>
    </div>
  );
}

export default AddChannel;