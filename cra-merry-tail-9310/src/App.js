import {Box,Text} from "@chakra-ui/react"
import './App.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import FirstR_SecondHalf from "./Pages/FirstR_SecondHalf";
import Home from "./Pages/Home";
// import ShopingPage from "./Pages/ShopingPage";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Box className="App">
    <Navbar/>
     
    <AllRoutes/>
    <Footer/>
    </Box>

  );
}

export default App;
