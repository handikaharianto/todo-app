import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/system/Box";

import FormContainer from "../shared/FormContainer";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //TODO: make POST request to backend for registration
  };

  return (
    <FormContainer>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 5,
            fontWeight: "bold",
            letterSpacing: 10,
            textAlign: "center",
          }}
        >
          TODO
        </Typography>
        <Box
          component="form"
          sx={{
            display: "grid",
            gap: 2,
            maxWidth: 470,
            mx: "auto",
          }}
          onSubmit={onSubmit}
        >
          <TextField
            type="text"
            name="name"
            label="Name"
            variant="filled"
            color="secondary"
            fullWidth={true}
            value={name}
            onChange={onChange}
            required
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="filled"
            color="secondary"
            fullWidth={true}
            value={email}
            onChange={onChange}
            required
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="filled"
            color="secondary"
            fullWidth={true}
            value={password}
            onChange={onChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
          >
            Register
          </Button>
          <Link
            to="/login"
            color="secondary"
            variant="body2"
            component={RouterLink}
            sx={{ textAlign: "right" }}
          >
            Have an account? Login
          </Link>
        </Box>
      </Container>
    </FormContainer>
  );
}

export default Register;
