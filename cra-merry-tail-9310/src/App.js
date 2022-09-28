import {Box,Text} from "@chakra-ui/react"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Box className="App">
    <Navbar/>
    <Home/>
    </Box>

  );
}

export default App;
