import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Signin, signup } from "../redux/userdata";
import { useNavigate } from "react-router-dom";
// import FormDialog from "./forgetdialog";

function LoginComponent({ role = "signin" }) {
  const { error, isLoggedIn, isSignup } = useSelector(
    (state) => state.userdata
  );
  const router = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  //   const [forgetpassworddialog, setforgetpassworddialog] = useState(false);

  useEffect(() => {
    isLoggedIn && router("/");
    isSignup && router("/login");
  }, [isLoggedIn, isSignup]);

  return (
    <Fragment>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        maxWidth={800}
        mx="auto"
        component={"form"}
        onSubmit={async (e) => {
          e.preventDefault();
          role === "signin" && dispatch(Signin(email, pass));
          role === "signup" && dispatch(signup(email, pass, name));
        }}
        spacing={4}
        my={5}
      >
        <Typography
          variant="body1"
          textTransform={"capitalize"}
          textAlign={"center"}
          color="red"
        >
          {error}
        </Typography>
        {role === "signup" && (
          <TextField
            fullWidth
            id="name"
            label="Name"
            sx={{ placeholder: { color: "primary" } }}
            color="primary"
            InputLabelProps={{ style: { color: "primary" } }}
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        )}
        <TextField
          fullWidth
          required
          id="email"
          label="Email id"
          InputLabelProps={{
            style: { color: "primary", borderColor: "primary" },
          }}
          type="email"
          placeholder="Email id"
          sx={{ placeholder: { color: "primary" } }}
          color="primary"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <TextField
          id="password"
          fullWidth
          required
          type="password"
          sx={{ placeholder: { color: "primary" } }}
          placeholder="Password"
          label="Password"
          color="primary"
          InputLabelProps={{ style: { color: "primary" } }}
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        {role === "signin" && (
          <Typography
            sx={{ textDecoration: "none" }}
            mx="auto"
            onClick={() => {
              // setforgetpassworddialog(true);
            }}
            variant="button"
            color="primary"
            textTransform={"capitalize"}
          >
            forget password ?
          </Typography>
        )}
        <Box justifyContent={"center"}>
          <Button color="success" type="submit" variant="contained">
            sumbit
          </Button>
        </Box>
      </Stack>
    
    </Fragment>
  );
}

export default LoginComponent;
