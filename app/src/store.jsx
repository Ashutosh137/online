import { configureStore } from "@reduxjs/toolkit";
// import userdatareducer from "@/lib/store/userreducer";
import userdatareducer from "./redux/userdata";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Container, Typography } from "@mui/material";

const store = configureStore({
  reducer: {
    userdata: userdatareducer,
  },
});

const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background:{primary:"rgb(46, 43, 43)"},
    secondary: {
      main: "rgb(46, 43, 43)",
    },
    text: {
      primary: "#ffffff",
    },
  }
});

const UseProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darktheme}>
        <Container maxWidth="lg">
          <Toaster />
          {children}
        </Container>
      </ThemeProvider>
    </Provider>
  );
};
export default UseProvider;
